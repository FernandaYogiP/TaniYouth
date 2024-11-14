import express from "express";
import signup from "../controllers/auth.js";

const Router = express.Router();
Router.post("/signup", signup);

export default Router