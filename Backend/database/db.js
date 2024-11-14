import mysql from "mysql2/promise";
import "dotenv/config";

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
})
