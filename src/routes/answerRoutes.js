import express from 'express';
import { addNewAnswer, getAllAnswers } from '../controllers/answerController.js';

const router = express.Router();
router.post('/add-answer/:question_id', addNewAnswer);
router.get('/',getAllAnswers);
export default router;