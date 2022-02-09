import mysql from "mysql2";
import dotenv from "dotenv";
// load the environment variables from the .env file
dotenv.config({
    path: ".env"
});

export const db = mysql.createConnection({
  host: process.env.MYSQLDB_HOST,
  user: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  database: process.env.MYSQLDB_DATABASE
});