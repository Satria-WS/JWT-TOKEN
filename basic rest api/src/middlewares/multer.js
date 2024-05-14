import multer from 'multer';
// import dotenv from 'dotenv';
// dotenv.config();
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const orignalname = file.originalname;
    // console.log(file);

    cb(null, `${timestamp}-${orignalname}`);
  }
});

const upload = multer({ storage: storage });

export default upload;