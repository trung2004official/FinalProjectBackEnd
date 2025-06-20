import Answer from "../models/answer.js";
import AnswerAttempt from "../models/answer_attempt.js";
import QuizAttempt from "../models/quiz_attempt.js";

export const submitQuizAttempt = async (attemptId, answers) => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    for (const [questionId, answerId] of Object.entries(answers)) {
        if (!answerId) {
            skipped++;
            continue;
        }

        const answer = await Answer.findByPk(answerId);
        const isCorrect = answer?.is_correct === true;

        if (isCorrect) correct++;
        else wrong++;

        await AnswerAttempt.create({
            quiz_attempt_id: attemptId,
            question_id: questionId,
            selected_answer_id: answerId,
        });
    }

    await QuizAttempt.update(
        {
            status: 'completed',
            score: correct,
            end_time: new Date()
        },
        { where: { id: attemptId } }
    );

    return { correct, wrong, skipped };
};

export const getAllSubmitAnswers = async () => {
    const data = await AnswerAttempt.findAll();
    return data;
}

export const findQuizAttempt = async (id) => {
    const quizAttempt = await QuizAttempt.findByPk(id);
    return quizAttempt;
}