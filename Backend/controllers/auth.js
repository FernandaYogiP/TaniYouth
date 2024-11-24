import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../database/db.js';
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import multer from 'multer';

dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(idToken) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  return ticket.getPayload();
}

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required.' });
  }

  try {
  
    const checkUserQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
    const checkUserResults = await query(checkUserQuery, [username, email]);

    if (checkUserResults.length > 0) {
      return res.status(400).json({ message: 'Username or email already exists.' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

 
    const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const results = await query(insertQuery, [username, email, hashedPassword]);

    const token = jwt.sign(
      { userId: results.insertId, username, email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      message: 'User created successfully.',
      token,
      userId: results.insertId,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error saving user to database.' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
    const checkUserResults = await query(checkUserQuery, [username]);

    if (checkUserResults.length === 0) {
      return res.status(400).json({ message: 'Incorrect username or password.' });
    }

    const user = checkUserResults[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Incorrect username or password.' });
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      userId: user.id,
      username: user.username,
      email: user.email,
      picture: user.picture,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Login failed.' });
  }
};

const googleAuth = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const userInfo = await verifyGoogleToken(token);
    const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
    const checkUserResults = await query(checkUserQuery, [userInfo.email]);

    let user;
    if (checkUserResults.length > 0) {
      user = checkUserResults[0];
    } else {
      const insertQuery = 'INSERT INTO users (username, email, profile_images) VALUES (?, ?, ?)';
      const insertResult = await query(insertQuery, [userInfo.name, userInfo.email, userInfo.picture]);
      user = {
        id: insertResult.insertId,
        username: userInfo.name,
        email: userInfo.email,
        profile_image: userInfo.profile_images,
      };
    }

    const jwtToken = jwt.sign(
      { userId: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      token: jwtToken,
      userId: user.id,
      username: user.username,
      email: user.email,
      profile_image: user.profile_image,
    });
  } catch (error) {
    console.error('Google OAuth ERROR!', error);
    res.status(500).json({ message: 'Google authentication failed.' });
  }
};

const getProfile = async (req, res) => {
  const { userId } = req.user; 

  try {
      const userQuery = 'SELECT id, username, email, phone_number, profile_image FROM users WHERE id = ?';
      const userResult = await query(userQuery, [userId]);

      if (userResult.length === 0) {
          return res.status(404).json({ message: 'User not found.' });
      }
      res.status(200).json({ user: userResult[0] });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error retrieving profile.' });
  }
};

const addProfileImage = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Check if the file type is allowed
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      fs.unlinkSync(req.file.path); // Delete the uploaded file if it's invalid
      return res.status(400).json({ message: 'Invalid file type. Only image files are allowed.' });
    }

    // Construct the file path for storage (relative to the 'uploads' folder)
    const fileName = req.file.filename;
    const profileImagePath = `uploads/${fileName}`;

    // Update the user's profile image in the database
    const updateQuery = 'UPDATE users SET profile_image = ? WHERE id = ?';
    await query(updateQuery, [profileImagePath, req.user.id]);

    // Respond with the updated profile image path
    res.status(200).json({
      message: 'Profile image uploaded successfully',
      profileImage: profileImagePath,  // Return relative path for frontend
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading profile image' });
  }
};

const updateName = async (req, res) => {
  const { userId } = req.user;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  try {
    const updateNameQuery = 'UPDATE users SET username = ? WHERE id = ?';
    const result = await query(updateNameQuery, [name, userId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Username updated successfully',
      name,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating username.' });
  }
};

const addPhoneNumber = async (req, res) => {
  const { userId } = req.user;
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  try {
    const checkUserQuery = 'SELECT * FROM users WHERE id = ?';
    const userResult = await query(checkUserQuery, [userId]);

    if (userResult.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatePhoneQuery = 'UPDATE users SET phone_number = ? WHERE id = ?';
    const updatePhoneResult = await query(updatePhoneQuery, [phoneNumber, userId]);

    if (updatePhoneResult.affectedRows === 0) {
      return res.status(500).json({ message: 'Failed to update phone number' });
    }

    res.status(200).json({
      message: 'Phone number updated successfully',
      phoneNumber: phoneNumber,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating phone number.' });
  }
};

const updatePassword = async (req, res) => {
  const { userId } = req.user; 
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Current password and new password are required.' });
  }

  try {
    const userQuery = 'SELECT * FROM users WHERE id = ?';
    const userResult = await query(userQuery, [userId]);

    if (userResult.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const user = userResult[0];
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Incorrect current password.' });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    const updatePasswordQuery = 'UPDATE users SET password = ? WHERE id = ?';
    await query(updatePasswordQuery, [hashedNewPassword, userId]);

    res.status(200).json({ message: 'Password updated successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating password.' });
  }
};

export {
  signup,
  login,
  googleAuth,
  getProfile,
  addProfileImage,
  upload,
  updatePassword,
  updateName,
  addPhoneNumber
};
