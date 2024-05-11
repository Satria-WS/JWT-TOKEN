import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config();
export const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
})

export const connectDb = (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Mysql Connect ...')
  }
}



