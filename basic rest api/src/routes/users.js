import express from "express";
import { createUser,getAllUsers,updateUser,deleteUser,getByIdUsers } from "../controller/users.js";
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
//get user
router.get('/:id', getByIdUsers)
//create post user
router.post('/', createUser)
//update - PATCH
router.patch('/:id', updateUser)
//delete user
router.delete('/:id' , deleteUser)





 export default router;
//  export default app; //bisa menggunakan default app