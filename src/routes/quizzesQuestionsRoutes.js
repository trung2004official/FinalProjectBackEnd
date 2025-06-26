import express from "express";
import { createQuizQuestion, getQuizzesQuestions, getQuestionsNotInQuiz, removeQuizQuestion } from "../controllers/questionsQuizzesController.js";

const router = express.Router();

router.get('/:id?', getQuizzesQuestions);
router.get('/not-in-quiz/:quizId', getQuestionsNotInQuiz);
router.post('/add-quiz-question/:quizId', createQuizQuestion);
router.delete('/remove-quiz-question/:quizId', removeQuizQuestion);

export default router;