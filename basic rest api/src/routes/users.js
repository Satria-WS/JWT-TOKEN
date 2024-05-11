import express from "express";
import { createUser,getAllUsers } from "../controller/users.js";
const app = express();
const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.send("users get");
// })

// router.post('/', (req, res, next) => {
//   res.send("users post");
// })

//get user
router.get('/', getAllUsers)
//create post user
router.post('/', createUser)





 export default router;
//  export default app; //bisa menggunakan default app