import express from 'express';
import { addNewAnswer, getAllAnswers, updateAnswerData, deleteAnswerData } from '../controllers/answerController.js';

const router = express.Router();
router.post('/add-answer/:question_id', addNewAnswer);
router.get('/:question_id?',getAllAnswers);
router.put('/update-answer/:id', updateAnswerData);
router.delete('/delete-answer/:question_id', deleteAnswerData);

export default router;