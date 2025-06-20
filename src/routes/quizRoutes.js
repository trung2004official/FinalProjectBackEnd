import express from 'express';
import { addNewQuiz, deleteQuiz, getQuizzes, updateQuiz  } from '../controllers/quizController.js';

const router = express.Router();

router.get('/:id?',getQuizzes);
// router.post('/:id/attempt', startQuizAttempt);
// router.post('/:id/attempt/answer', submitAnswer);
// router.post('/:id/attempt/submit', submitQuiz);
// router.post('/create-quiz', addNewQuiz);
// router.put('/update-quiz/:id', updateQuiz);
// router.delete('/delete-quiz/:id', deleteQuiz);

export default router;