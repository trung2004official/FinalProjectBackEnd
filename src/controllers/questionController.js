import { addQuestion, findQuesionExisted, getAllQuestions, getQuestionById, updateQuestion } from "../services/question_services.js";
export const getQuestions = async (req, res) => {
    const {id} = req.params;
    if(id) {
        const question = await getQuestionById(id);
        if(!question) {
            return res.status(404).json({message: 'Không tìm thấy câu hỏi.'});
        }
        return res.status(200).json({message: 'Đã lấy câu hỏi.', question});
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
        const {content, major, explaination} = req.body;

        const question = await updateQuestion(id, content, major, explaination)

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