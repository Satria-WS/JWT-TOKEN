import express from 'express';
import upload from '../middlewares/multer.js';
const router = express.Router();



router.post('/', upload.single('photo'),async (req, res) => {
  res.status(200).json({
    message: 'Upload berhasil'
  })
})



export default router;