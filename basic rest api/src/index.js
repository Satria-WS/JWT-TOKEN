import express from 'express';
import userRoutes from "./routes/users.js";
import uploadRoutes from "./controller/upload.js"
import { logRequest } from './middlewares/logs.js';
import dbPool from './config/db.js';
import dotenv from 'dotenv';
// import upload from './middlewares/multer.js';


const app = express();

dotenv.config();
const port = process.env.PORT || 5000;
//middle ware
app.use(logRequest);
//middle ware ini mengizinkan req.body berupa json
app.use(express.json());

//middle ware static
app.use("/assets", express.static('public/images'));

// //upload image
// app.post('/upload',upload.single('photo'),(req, res) => {
//   res.json({
//     message: 'Upload berhasil'
//   })
// })



//grouping routes
app.use('/users', userRoutes);
app.use('/upload', uploadRoutes)

//handler error
app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

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