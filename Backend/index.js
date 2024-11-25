import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connection } from "./database/db.js";
import route from "./router/route.js";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();
const app = express ();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());
app.use(route);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen (process.env.PORT, async() => {
    await connection();
    console.log(`http://localhost:${process.env.PORT}`)
} ) 
