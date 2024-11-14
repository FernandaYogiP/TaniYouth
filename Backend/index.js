import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express ();

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

app.listen (process.env.PORT, async() => {
    console.log(`https://localhost:${process.env.PORT}`)
} ) 
