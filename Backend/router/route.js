import express from "express";
import {signup, login, googleAuth} from "../controllers/auth.js";


const Router = express.Router();
Router.post("/signup", signup);
Router.post("/login", login);
Router.post("/SignUpGoogle", googleAuth);

export default Router