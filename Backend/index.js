import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connection } from "./database/db.js";
import route from "./router/route.js";

dotenv.config();
const app = express ();

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());
app.use(route);

app.listen (process.env.PORT, async() => {
    await connection();
    console.log(`https://localhost:${process.env.PORT}`)
} ) 
