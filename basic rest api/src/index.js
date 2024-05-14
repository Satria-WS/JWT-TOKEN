import express from 'express';
import userRoutes from "./routes/users.js";
import { logRequest } from './middlewares/logs.js';
import dbPool from './config/db.js';
import dotenv from "dotenv";

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;
//middle ware
app.use(logRequest);
//middle ware ini mengizinkan req.body berupa json
app.use(express.json());

//middle ware static
app.use(express.static('public'));

//grouping routes
app.use('/users', userRoutes)


dbPool.getConnection((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected to MySQL database');

})
// async function connectToDatabase() {
//   try {
//     await new Promise((resolve, reject) => {
//       dbPool.getConnection(function(err) {
//         if (err) {
//           reject(err); // Reject the promise if there's an error
//         } else {
//           resolve(); // Resolve the promise if connection is successful
//         }
//       });
//     });
//     console.log("Connected!");
//   } catch (error) {
//     console.error("Connection error:", error);
//   }
// }

// connectToDatabase();



app.listen(port, () => {
  console.log('Server succesfull on port ' + port)
})