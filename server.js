import express from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/sequelize.js';
import authRoute from './src/routes/authRoutes.js'; 
import quizRoute from './src/routes/quizRoutes.js';
import questionRoute from './src/routes/questionRoutes.js';
import cors from 'cors';

import './src/models/quiz.js';
import './src/models/user.js';
import './src/models/question.js';
import './src/models/answer.js';
import './src/models/quizAttempt.js';
import './src/models/userAnswer.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use('/api/auth', authRoute);
app.use('/api/quiz', quizRoute);
app.use('/api/questions', questionRoute);

sequelize.sync({ alter: true })
    .then(() => console.log('DB synced with Sequelize'))
    .catch((err) => console.error(`Sequelize sync error: ${err}`));

//start server
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});