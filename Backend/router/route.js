import express from "express";
import {signup, login, googleAuth, getProfile, updatePassword, updateName, addPhoneNumber, addProfileImage, upload, addDiscussion, getDiscussions} from "../controllers/auth.js";
import { authenticateJWT } from "../middleware/authMiddleware.js";

const Router = express.Router();

Router.post("/signup", signup);
Router.post("/login", login);
Router.post("/SignUpGoogle", googleAuth);
Router.get("/profile", authenticateJWT, getProfile);
Router.put('/upload/profile/image', authenticateJWT, upload.single('file'), addProfileImage);
Router.put('/profile/name', authenticateJWT, updateName);
Router.put('/profile/phone', authenticateJWT, addPhoneNumber);
Router.put('/profile/password', authenticateJWT, updatePassword);
Router.post('/discussions', addDiscussion);
Router.get('/discussions', getDiscussions);

export default Router