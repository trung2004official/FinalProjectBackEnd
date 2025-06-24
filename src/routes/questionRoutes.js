import express from 'express';
import { addNewQuestion, getQuestions, updateQuestionData } from '../controllers/questionController.js';

const router = express.Router();

router.get('/:id?', getQuestions);
router.post('/add-question', addNewQuestion);
router.put('/update-question/:id', updateQuestionData);

export default router;