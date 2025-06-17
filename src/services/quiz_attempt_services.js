import QuizAttempt from '../models/quiz_attempt.js'

export const startQuiz = async (userId, quizId) => {
    const attempt = await QuizAttempt.create({
        user_id: userId,
        quiz_id: quizId,
        start_time: new Date(),
        status: 'in_progress',
    });
    return attempt;
};