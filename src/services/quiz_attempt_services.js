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

export const getAttemptById = async (id) => {
    const attempt = await QuizAttempt.findByPk(id);
    return attempt;
}

export const getAllAttempts = async () => {
    const attempts = await QuizAttempt.findAll();
    return attempts;
}

export const submitQuiz = async (id) => {
    const quizAttempt = await QuizAttempt.findByPk(id);
    if (!quizAttempt) return res.status(404).json({ message: 'Attempt không tồn tại' });
}