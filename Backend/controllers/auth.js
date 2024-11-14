import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../database/db.js'; 
import dotenv from 'dotenv';

dotenv.config();

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

  export default signup