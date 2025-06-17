import Quiz from "../models/quiz.js"

export const getQuizById = async (id) => {
    const quiz = await Quiz.findByPk(id);
    return quiz;
}

export const getQuizzesByKeyword = async (search) => {
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

export const getAllQuizzes = async () => {
    const quizzes = await Quiz.findAll();
    return quizzes;
}