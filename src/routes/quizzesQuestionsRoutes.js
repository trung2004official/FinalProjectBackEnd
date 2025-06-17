import express from "express";
import { getQuizzesQuestions } from "../controllers/questionsQuizzesController.js";

const router = express.Router();

router.get('/:id?', getQuizzesQuestions);

export default router;