import { getAllSubmitAnswers, submitQuizAttempt } from "../services/answer_services.js";

export const submitAnswer = async (req, res) => {
    const {attempId} = req.params;
    const {answers} = req.body;

    const resultDetails = await submitQuizAttempt(attempId, answers);
    return res.status(200).json({message: 'Tạo answer attempt thành công', data: resultDetails});
}

export const getSubmitAnswers = async (req, res) => {
    const submitAnswers = await getAllSubmitAnswers();
    return res.status(200).json({message: 'Lấy tất cả danh sách answers: ', data: submitAnswers});
}