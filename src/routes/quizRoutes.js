import express from 'express';
import { getQuizzes } from '../controllers/quiz.controller.js';

const router = express.Router();

router.get('/:id?',getQuizzes);

export default router;