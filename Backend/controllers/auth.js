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

  const login = async (req, res) => {
    const {username, password} =  req.body
    if (!username || !password) {
      return res.status(400).json ({message: 'Password dibutuhkan!'});
    }
    try {
      const checkUserQuery = "SELECT * FROM users WHERE username = ?";
      const checkUserResults = await query(checkUserQuery, [username]);
      if(checkUserResults === 0){
        return res.status(400).json({ message: 'Password atau Username anda salah!' });
      }
      const user = checkUserResults[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Password atau Username anda salah!' });
      }
      const token = jwt.sign( 
        {userId: user.id, 
          username: user.username,
        email: user.email}, process.env.JWT_SECRET, 
        {expiresIn: "1H"}
      );
      res.status(200).json({message: 'Login berhasil', token, userId: user.id}); 
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Proses login gagal :('});
    }
  }

  export {signup, login}