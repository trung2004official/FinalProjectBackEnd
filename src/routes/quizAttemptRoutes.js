import express from 'express';
import { getQuizAttemptData, startQuizAttempt, getResultHistory } from '../controllers/quizAttemptController.js';

const router = express.Router();

router.get('/:id?', getQuizAttemptData);
router.get('/user-history/:user_id', getResultHistory);
router.post('/start', startQuizAttempt);

export default router;