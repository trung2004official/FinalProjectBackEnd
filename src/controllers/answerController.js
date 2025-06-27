import { addAnswer, getAllAnswer, getAllAnswerByQuestionId, updateAnswer, deleteAnswer } from "../services/answer_services.js";

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
        const { question_id } = req.params;
        if (question_id) {
            const answers = await getAllAnswerByQuestionId(question_id);
            if (!answers || answers.length === 0) {
                return res.status(404).json({ message: 'Không tìm thấy câu trả lời cho câu hỏi này.' });
            }
            return res.status(200).json({ message: 'Đã lấy tất cả câu trả lời cho câu hỏi này', answers });
        }
        const answers = await getAllAnswer();
        return res.status(200).json({ message: 'Đã lấy tất cả câu trả lời', answers });
    } catch (error) {
        console.error('Lỗi khi lấy tất cả câu trả lời: ', error);
        return res.status(500).json({ message: 'Lỗi khi lấy tất cả câu trả lời', error: error.message });
    }
}

export const updateAnswerData = async (req, res) => {
    const { id } = req.params;
    const { content, is_correct } = req.body;
    try {
        const answer = await updateAnswer(id, content, is_correct);
        if (!answer) {
            return res.status(404).json({ message: 'Không tìm thấy câu trả lời.' });
        }
        return res.status(200).json({ message: 'Đã cập nhật câu trả lời.', answer });
    } catch (error) {
        console.error('Lỗi khi cập nhật câu trả lời: ', error);
        return res.status(500).json({ message: 'Lỗi khi cập nhật câu trả lời.', error: error.message });
    }
}

export const deleteAnswerData = async (req, res) => {
    const { question_id } = req.params;

    try {
        const result = await deleteAnswer(question_id);
        if (!result) {
            return res.status(404).json({ message: 'Không tìm thấy câu trả lời để xóa.' });
        }
        return res.status(200).json({ message: 'Đã xóa câu trả lời thành công.' });
    } catch (error) {
        console.error('Lỗi khi xóa câu trả lời: ', error);
        return res.status(500).json({ message: 'Lỗi khi xóa câu trả lời.', error: error.message });
    }
}
