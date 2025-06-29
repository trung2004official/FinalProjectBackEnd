import express from 'express';
import { loginUser, registerUser, getAllUsers } from '../controllers/authController.js';
import upload from '../middleware/upload.js'

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', upload.single('avatar') ,registerUser);
router.get('/:id?',getAllUsers);

export default router;