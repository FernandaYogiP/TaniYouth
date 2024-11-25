import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../database/db.js';
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import multer from 'multer';
import path from 'path';

dotenv.config();

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
      profile_image: user.profile_image,
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
  const { id: userId } = req.user; 

  try {
    const userQuery = 'SELECT id, username, email, phone_number, profile_image FROM users WHERE id = ?';
    const [userResult] = await query(userQuery, [userId]); 

    if (!userResult) {
      return res.status(404).json({ message: 'User not found.' });
    }

  
    res.status(200).json({ user: userResult });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error retrieving profile.' });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });

const addProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    console.log('Uploaded file:', req.file);

  
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      fs.unlinkSync(req.file.path); 
      return res.status(400).json({ message: 'Invalid file type. Only image files are allowed.' });
    }

    const fileName = req.file.filename;
    const profileImagePath = path.join('uploads', fileName); 

    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: 'User ID is missing or invalid' });
    }

   
    const result = await query('UPDATE users SET profile_image = ? WHERE id = ?', [profileImagePath, req.user.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Profile image uploaded successfully',
      profileImage: profileImagePath,
    });

  } catch (error) {
    console.error('Error uploading image:', error);  
    res.status(500).json({ message: 'Error uploading profile image', error: error.message });
  }
};




const updateName = async (req, res) => {
  const { name } = req.body;  
  const { id } = req.user;  

  if (!name || !id) {
      return res.status(400).json({ message: 'Name or userId is missing' });
  }

  try {
     
      const result = await query('UPDATE users SET username = ? WHERE id = ?', [name, id]);

      console.log('Update result:', result);

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'Name updated successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to update name', error: err.message });
  }
};

const addPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.body;  
    const { id } = req.user;  
    if (!phoneNumber || !id) {
        return res.status(400).json({ message: 'Phone number or userId is missing' });
    }

    try {
        const result = await query('UPDATE users SET phone_number = ? WHERE id = ?', [phoneNumber, id]);
        console.log('Update result:', result);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Phone number updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to update phone number', error: err.message });
    }
};

const updatePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;  
    const { id } = req.user;  

    if (!currentPassword || !newPassword || !id) {
        return res.status(400).json({ message: 'Current password, new password, or userId is missing' });
    }

    try {
      const userResult = await query('SELECT * FROM users WHERE id = ?', [id]);
      console.log('Update result:', userResult);

        if (userResult.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = userResult[0];  

     
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const result = await query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, id]);
        console.log('Update result:', result);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Failed to update password' });
        }

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to update password', error: err.message });
    }
};

export {
  signup,
  login,
  googleAuth,
  getProfile,
  addProfileImage,
  updatePassword,
  updateName,
  addPhoneNumber,
  upload
};
