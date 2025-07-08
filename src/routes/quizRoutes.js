import express from 'express';
import { addNewQuiz, deleteQuiz, getQuizzes, updateQuiz, importQuizzesFromExcel, updateQuizStatus, getQuizzesByMajor  } from '../controllers/quizController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/quizzes-by-major',getQuizzesByMajor);
router.get('/:id?',getQuizzes);
router.post('/create-quiz', addNewQuiz);
router.post('/import-quizzes',upload.single('file'), importQuizzesFromExcel);
router.put('/update-quiz/:id', updateQuiz);
router.patch('/update-status/:id', updateQuizStatus);
router.delete('/delete-quiz/:id', deleteQuiz);

export default router;