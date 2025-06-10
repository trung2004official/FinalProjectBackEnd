import express from 'express';
import { getQuizzes, startQuizAttempt, submitAnswer, submitQuiz  } from '../controllers/quizController.js';

const router = express.Router();

router.get('/:id?',getQuizzes);
router.post('/:id/attempt', startQuizAttempt);
router.post('/:id/attempt/answer', submitAnswer);
router.post('/:id/attempt/submit', submitQuiz);

export default router;