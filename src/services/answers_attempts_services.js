import Answer from "../models/answer.js";
import AnswerAttempt from "../models/answer_attempt.js";
import Question from "../models/question.js";
import QuizAttempt from "../models/quiz_attempt.js";

export const findAnswerAttemptById = async (attemptId) => {
    const answerAttempts = await AnswerAttempt.findAll({
        where: { quiz_attempt_id: attemptId },
        include: [{
            model: Question,
            include: {
                model: Answer,
                as: 'answers',
                where: { is_correct: true }
            }
        },
        {
            model: QuizAttempt,
        },
        {
            model: Answer,
            as: 'selected_answer',
            required: false
        }
        ]
    });

    return answerAttempts;
}