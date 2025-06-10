import dotenv from 'dotenv';
import Quiz from '../models/quiz.js';
import sequelize from '../config/sequelize.js';

dotenv.config();

const seedQuiz = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        const quiz = await Quiz.create({
            title: 'JavaScript Fundamentals',
            duration: 45,
            difficulty: 'Gà mờ',
            major: 'Thiết kế Web',
            question_count: 25,
        });
        console.log('Quiz seeded successfully');
    } catch (err) {
        console.error('Error seeding quiz:', err);
    } finally {
        await sequelize.close();
    }
};

seedQuiz();