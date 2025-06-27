import express from 'express';
import { addNewQuestion, deleteQuestionData, getQuestions, updateQuestionData } from '../controllers/questionController.js';

const router = express.Router();

router.get('/:id?', getQuestions);
router.post('/add-question', addNewQuestion);
router.put('/update-question/:id', updateQuestionData);
router.delete('/delete-question/:id', deleteQuestionData);

export default router;