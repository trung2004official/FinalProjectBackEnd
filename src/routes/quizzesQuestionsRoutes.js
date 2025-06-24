import express from "express";
import { createQuizQuestion, getQuizzesQuestions } from "../controllers/questionsQuizzesController.js";

const router = express.Router();

router.get('/:id?', getQuizzesQuestions);
router.post('/add-quiz-question/:quizId', createQuizQuestion);

export default router;