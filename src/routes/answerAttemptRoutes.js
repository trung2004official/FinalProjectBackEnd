import e from "express";
import { getSubmitAnswers, submitAnswer } from "../controllers/answerAttemptController.js";

const router = e.Router();

router.get('/', getSubmitAnswers);
router.post('/:attempId', submitAnswer);

export default router;