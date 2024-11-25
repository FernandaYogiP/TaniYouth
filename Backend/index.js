import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connection } from "./database/db.js";
import route from "./router/route.js";
import path from "path";


dotenv.config();
const app = express ();

const __dirname = path.dirname(new URL(process.env.FILE_PATH).pathname);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());
app.use(route);



app.listen (process.env.PORT, async() => {
    await connection();
    console.log(`http://localhost:${process.env.PORT}`)
} ) 
