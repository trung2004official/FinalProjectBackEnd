import { getAllAnswerByQuestionId } from "../services/answer_services.js";
import { addQuestion, findQuesionExisted, getAllQuestions, getQuestionById, updateQuestion, deleteQuestion } from "../services/question_services.js";
export const getQuestions = async (req, res) => {
    const {id} = req.params;
    if(id) {
        const question = await getQuestionById(id);
        if(!question) {
            return res.status(404).json({message: 'Không tìm thấy câu hỏi.'});
        }

        const answers = await getAllAnswerByQuestionId(id);
        return res.status(200).json({message: 'Đã lấy câu hỏi.', question, answers});
    }
    
    const questions = await getAllQuestions();
    return res.status(200).json({message: 'Đã lấy tất cả questions.', questions});
}

export const addNewQuestion = async (req, res) => {
    try {
        const {content, major, difficulty, explaination} = req.body;

        if(!content || !major || !difficulty) {
            return res.status(400).json({message: 'Vui lòng nhập đầy đủ thông tin'});
        }

        // const existed = await findQuesionExisted(content);

        // if (existed) {
        //     return res.status(409).json({message: 'Đã có câu hỏi này trong hệ thống'});
        // }

        const newQuestion = await addQuestion(content, major, difficulty, explaination);
        return res.status(200).json({message: 'Tạo câu hỏi mới thành công', question: newQuestion});
    } catch (error) {
        console.error('Lỗi khi tạo câu hỏi: ',error);
        return res.status(500).json({message: `Lỗi khi tạo câu hỏi`});
    }
}

export const updateQuestionData = async (req, res) => {
    try {
        const {id} = req.params;
        const {content, major, difficulty, explaination} = req.body;

        const question = await updateQuestion(id, content, major,difficulty, explaination)

        if(!question) {
            return res.status(404).json({message: 'Không tìm thấy câu hỏi.'});
        }

        await question.save();

        const answers = await getAllAnswerByQuestionId(id);
        return res.status(200).json({message: 'Đã chỉnh sửa dữ liệu câu hỏi.', updatedQuestion: question, answers: answers});
    } catch (error) {
        console.error('Lỗi khi chỉnh sửa câu hỏi: ', error);
        return res.status(500).json({message: 'Lỗi khi chỉnh sửa câu hỏi.'})
    }
}

export const deleteQuestionData = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await deleteQuestion(id);
        if(!result) {
            return res.status(404).json({message: 'không thể xóa câu hỏi này.'});
        }
        return res.status(200).json({message: 'Đã xóa câu hỏi thành công.', questionId: id});
    } catch (error) {
        console.error('Lỗi khi xóa câu hỏi: ', error);
        return res.status(500).json({message: 'Lỗi khi xóa câu hỏi.', error: error.message});
    }
}
