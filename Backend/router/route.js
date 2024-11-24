import express from "express";
import {signup, login, googleAuth, getProfile, updatePassword, updateName, upload, addPhoneNumber, addProfileImage} from "../controllers/auth.js";
import { authenticateJWT } from "../middleware/authMiddleware.js";


const Router = express.Router();
Router.post("/signup", signup);
Router.post("/login", login);
Router.post("/SignUpGoogle", googleAuth);
Router.get("/profile", authenticateJWT, getProfile);
Router.put('uploads/profile/image', upload.single('profileImage'), addProfileImage);
Router.put('/profile/name', authenticateJWT, updateName);
Router.post('/profile/phone', authenticateJWT, addPhoneNumber);
Router.put('/profile/password', authenticateJWT, updatePassword);

export default Router