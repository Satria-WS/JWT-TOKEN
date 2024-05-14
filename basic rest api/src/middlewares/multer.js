import multer from 'multer';

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

const upload = multer({
  storage: storage,
  limits: {
    fileSize : 3 * 1000 * 1000 //3mb . user cannt upload than 3mb
  }
 });

export default upload;