import express from 'express';
import dotenv from 'dotenv';
import authRoute from './src/routes/authRoutes.js';
import quizRoute from './src/routes/quizRoutes.js';
import questionRoute from './src/routes/questionRoutes.js';
import quizzesQuestionsRoute from './src/routes/quizzesQuestionsRoutes.js';
import quizAttemptRoute from './src/routes/quizAttemptRoutes.js';
import answerAttemptRoute from './src/routes/answerAttemptRoutes.js';
import answerRoute from './src/routes/answerRoutes.js';
import ratingRoute from './src/routes/ratingRoutes.js';
import cors from 'cors';
import db from './src/models/index.js';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.DB_HOST || 'locahost';
const __dirname = path.resolve();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoute);
app.use('/api/quizzes', quizRoute);
app.use('/api/questions', questionRoute);
app.use('/api/quizzes-questions', quizzesQuestionsRoute);
app.use('/api/attempts', quizAttemptRoute);
app.use('/api/answers-attempts', answerAttemptRoute);
app.use('/api/answers', answerRoute );
app.use('/api/ratings', ratingRoute );

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
})