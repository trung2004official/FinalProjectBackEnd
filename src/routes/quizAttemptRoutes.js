import express from 'express';
import { getQuizAttemptData, startQuizAttempt, submitQuizAttempt } from '../controllers/quizAttemptController.js';

const router = express.Router();

router.get('/:id?', getQuizAttemptData);
router.post('/start', startQuizAttempt);
router.post('/:id/submit', submitQuizAttempt);

export default router;