import dotenv from "dotenv";
import { db } from "../config/db.js";

// dotenv.config();

// db.connect(async () => {
//   try {
//     await db.connect();
//     console.log("Connected!");

//     const sql =
//       "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     await db.query(sql);

//     console.log("Table created");
//   } catch (err) {
//     console.error("Error:", err);
//   }
// });
// dotenv.config({ path: "../../.env" });
// const port = process.env.PORT;
// console.log(port);

// db.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });
export const createTable = async () => {
  try {
    console.log("Connecting to the database...");
    await db.promise().connect();

    console.log("Connected!");

    // Check if the customers table exists
    const rows = await db.promise().query("SHOW TABLES LIKE 'customers'");
    if (rows.length > 0) {
      // If the customers table exists, drop it
      await db.promise().query("DROP TABLE customers");
      console.log("Existing customers table dropped");
    }

    // Create the customers table
    const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    await db.promise().query(sql);
    console.log("Table created");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await db.promise().end();
  }
};
