import { Op } from "sequelize";
import { getQuizById, getQuizzesByKeyword, getAllQuizzes, addQuiz, editQuiz } from "../services/quiz_services.js";
// import QuizAttempt from "../models/quizAttempt.js";
export const getQuizzes = async (req, res) => {
    try {
        const { id } = req.params;
        const { search } = req.query;

        if (id) {
            const quiz = await getQuizById(id);
            return res.status(200).json(quiz);
        }

        if (search) {
            const quizzes = await getQuizzesByKeyword(search);
            return res.status(200).json(quizzes);
        }

        const quizzes = await getAllQuizzes();
        return res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error during get quiz: ',error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};


export const addNewQuiz = async (req, res) => {
    try {
        const {title, duration, difficulty, major, question_count} = req.body;
        
        if (!title || !duration || !difficulty || !major || !question_count) {
            return res.status(400).json({ message: "Vui lòng cung cấp đầy đủ thông tin" });
        }

        const newQuiz = await addQuiz(title, duration, difficulty, major, question_count);
    
        return res.status(201).json({
            message: 'Đã thêm quiz mới',
            quiz: newQuiz,
        });
    } catch (error) {
        console.error('Lỗi khi thêm quiz mới: ',error);
        return res.status(500).json({
            message: 'Lỗi Server',
            error: error.message,
        });
    }
};

export const updateQuiz = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, duration, difficulty, major, question_count} = req.body;

        const quiz = await editQuiz(id, title, duration, difficulty, major, question_count);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz không tồn tại' });
        }

        await quiz.save();

        return res.status(200).json({
            message: 'Cập nhật quiz thành công',
            quiz,
        });
    } catch (error) {
        console.error('Lỗi Server: ', error);
        return res.status(500).json({message: 'Lỗi Server: ', error: error.message});
    }
};

export const deleteQuiz = async (req, res) => {
    try {
        const {id} = req.params;

        const quiz = Quiz.findByPk(id);
        if(!quiz) {
            return res.status(404).json({message: 'Quiz không tồn tại'});
        }

        await Quiz.destroy();

        return res.status(200).json({message: 'Xóa Quiz thành công'});
    } catch (error) {
        console.error('Lỗi server: ', error);
        return res.status(500).json({ message: 'Lỗi server', error: error.message});
    }
}