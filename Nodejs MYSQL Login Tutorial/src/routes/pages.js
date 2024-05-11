import express from 'express';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
})

router.get('/register', (req, res) => {
  res.render('register');
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/home' ,(req, res) => {
   res.send('Welcome to home page!')
  // res.render('home')
  
})

export default router;