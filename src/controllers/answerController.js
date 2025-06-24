import { addAnswer, getAllAnswer } from "../services/answer_services.js";

export const addNewAnswer = async (req, res) => {
    const { question_id } = req.params;
    const { content, is_correct } = req.body;

    if (!question_id || !content) {
        return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin' });
    }

    try {
        const newAnswer = await addAnswer(question_id, content, is_correct);

        return res.status(201).json({ message: 'Đã thêm câu trả lời mới thành công', answer: newAnswer });
    } catch (error) {
        console.error('Lỗi khi thêm câu trả lời mới: ', error);
        return res.status(500).json({ message: 'Lỗi khi thêm câu trả lời mới', error: error.message });
    }
}   

export const getAllAnswers = async (req, res) => {
    try {
        const answers = await getAllAnswer();
        return res.status(200).json({ message: 'Đã lấy tất cả câu trả lời', answers });
    } catch (error) {
        console.error('Lỗi khi lấy tất cả câu trả lời: ', error);
        return res.status(500).json({ message: 'Lỗi khi lấy tất cả câu trả lời', error: error.message });
    }
}