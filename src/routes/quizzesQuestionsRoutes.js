import express from "express";
import { createQuizQuestion, getQuizzesQuestions, getQuestionsNotInQuiz } from "../controllers/questionsQuizzesController.js";

const router = express.Router();

router.get('/:id?', getQuizzesQuestions);
router.get('/not-in-quiz/:quizId', getQuestionsNotInQuiz);
router.post('/add-quiz-question/:quizId', createQuizQuestion);

export default router;