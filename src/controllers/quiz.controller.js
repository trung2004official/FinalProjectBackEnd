import { Op } from "sequelize";
import Quiz from "../models/quiz.js";
export const getQuizzes = async (req, res) => {
    try {
        const { id } = req.params;
        const { search } = req.query;

        if (id) {
            const quiz = await getQuizzesById(id);
            return res.status(200).json(quiz);
        }

        if (search) {
            const quizzes = await getQuizzesByKeyword(search);
            return res.status(200).json(quizzes);
        }

        const quizzes = await Quiz.getAllQuizzes();
        return res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error during get quiz: ',error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getQuizzesById = async (id) => {
    const quiz = await Quiz.findByPk(id);
    return quiz;
};

const getQuizzesByKeyword = async (search) => {
    const quizzes = await Quiz.findAll({
        where: {
            [Op.or]: [
                {title: {[Op.like]: `%${search}%`}},
                {description: {[Op.like]: `%${search}%`}},
            ],
        },
    });
    return quizzes;
};

const getAllQuizzes = async () => {
    const quizzes = await Quiz.findAll();
    return quizzes;
};