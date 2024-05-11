import express from 'express';
import { register,login } from '../controllers/auth.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/homes', verifyToken, (req,res) => {
  res.send('my homes')
})


export default router;