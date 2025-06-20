import { addQuestion, getAllQuestions, getQuestionById, updateQuestion } from "../services/question_services.js";

export const getQuestions = async (req, res) => {
    const questions = await getAllQuestions();
    return res.status(200).json({message: 'Đã lấy tất cả questions.', questions});
}

export const addNewQuestion = async (req, res) => {
    try {
        const {content, major, explaination, score} = req.body;

        if(!content || !major|| !score) {
            return res.status(400).json({message: 'Vui lòng nhập đầy đủ thông tin'});
        }

        const newQuestion = await addQuestion(content, major, explaination, score);
        return res.status(200).json({message: 'Tạo câu hỏi mới thành công', question: newQuestion});
    } catch (error) {
        console.error('Lỗi khi tạo câu hỏi: ',error);
        return res.status(500).json({message: `Lỗi khi tạo câu hỏi`});
    }
}

export const updateQuestionData = async (req, res) => {
    try {
        const {id} = req.params;
        const {content, major, explaination, score} = req.body;

        const question = await updateQuestion(id, content, major, explaination, score)

        if(!question) {
            return res.status(404).json({message: 'Không tìm thấy câu hỏi.'});
        }

        await question.save();
        return res.status(200).json({message: 'Đã chỉnh sửa dữ liệu câu hỏi.'});
    } catch (error) {
        console.error('Lỗi khi chỉnh sửa câu hỏi: ', error);
        return res.status(500).json({message: 'Lỗi khi chỉnh sửa câu hỏi.'})
    }
}

