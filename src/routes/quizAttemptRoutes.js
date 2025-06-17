import express from 'express';
import { startQuizAttempt } from '../controllers/quizController.js';

const router = express.Router();
router.post('/start', startQuizAttempt);

export default router;