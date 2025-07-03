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
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import initSocket from './src/sockets/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.DB_HOST || 'localhost';
const __dirname = path.resolve();

app.use(express.json());
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://quiztechapp.netlify.app',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));        
app.options('*', cors(corsOptions)); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoute);
app.use('/api/quizzes', quizRoute);
app.use('/api/questions', questionRoute);
app.use('/api/quizzes-questions', quizzesQuestionsRoute);
app.use('/api/attempts', quizAttemptRoute);
app.use('/api/answers-attempts', answerAttemptRoute);
app.use('/api/answers', answerRoute );
app.use('/api/ratings', ratingRoute );

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: ['http://localhost:5173', 'https://quiztechapp.netlify.app'],
    credentials: true,
  },
});

initSocket(io);

db.sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})