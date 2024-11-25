import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); 

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
   
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId, username: decoded.username, email: decoded.email };
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ message: 'Token is not valid' });
  }
};

