import AnswerAttempt from "../models/answer_attempt.js";

export const findAnswerAttemptById = async (attemptId) => {
    const answerAttempts = await AnswerAttempt.findAll({
        where: {quiz_attempt_id: attemptId}
    });
    return answerAttempts;
}