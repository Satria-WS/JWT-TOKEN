import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import path from 'path';
import { db, connectDb } from './config/db.js';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import routerPages from './routes/pages.js';
import routerAuth from "./routes/auth.js";
import { createTable } from './models/authModel.js';

const app = express();
dotenv.config();
const port = process.env.PORT;
//connect to database mysql
// db.connect(connectDb());
connectDb();
const __filename = fileURLToPath(import.meta.url); // Get the current file name
const __dirname = path.dirname(__filename); // Get the directory name
const publicDir = path.join(__dirname, 'public'); // Adjust path to the "public" directory
const viewsDir = path.join(__dirname, 'views'); // Adjust path to the "views" directory
app.use(cors());
app.use(express.static(publicDir));
app.set('view engine', 'hbs');
app.set('views', viewsDir); // Set the views directory

//parse URL-encoded bodies as send by HTML forms
app.use(express.urlencoded({ extended: false }));
//parse JSON for sent in to API client
app.use(express.json());

//Defined routes
app.use('/', routerPages);
app.use('/auth', routerAuth);


//create module or table
// createTable();


app.listen(port, () => console.log("Backend is running on port " + port));