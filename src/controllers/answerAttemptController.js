import { getAllSubmitAnswers, submitQuizAttempt } from "../services/answer_services.js";
import { findAnswerAttemptById } from "../services/answers_attempts_services.js";

export const submitAnswer = async (req, res) => {
    const {attempId} = req.params;
    const {answers} = req.body;

    const resultDetails = await submitQuizAttempt(attempId, answers);
    return res.status(200).json({message: 'Tạo answer attempt thành công', data: resultDetails});
}

export const getSubmitAnswers = async (req, res) => {
    const {quizAttemptId} = req.params;
    if (quizAttemptId) {
        const answerAttempt = await findAnswerAttemptById(quizAttemptId);
        if (!answerAttempt) {
            return res.status(404).json({message: 'Answer attempt không tồn tại'});
        }
        return res.status(200).json({message: 'Lấy answer attempt thành công', data: answerAttempt});
    }
    const submitAnswers = await getAllSubmitAnswers();
    return res.status(200).json({message: 'Lấy tất cả danh sách answers: ', data: submitAnswers});
}