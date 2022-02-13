import mysql from "mysql2";

export const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQLDB_HOST,
  user: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  database: process.env.MYSQLDB_DATABASE
});