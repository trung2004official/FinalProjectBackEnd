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

export const getQuizzesByMajor = async (major) => {
    const quizzes = await Quiz.findAll({
        where: {
            major: major,
        },
    });
    return quizzes;
}

export const getAllQuizzes = async () => {
    const quizzes = await Quiz.findAll();
    return quizzes;
}

export const addQuiz = async (title, duration, difficulty, major, description) => {
    const quiz = await Quiz.create({
        title,
        duration,
        difficulty,
        major,
        description,
    });
    return quiz;
}

export const editQuiz = async (id, title, duration, difficulty, major, question_count) => {
    const updatedQuiz = await Quiz.findByPk(id);

    if (!updatedQuiz) {
        return 0;
    }

    updatedQuiz.title = title || updatedQuiz.title;
    updatedQuiz.duration = duration || updatedQuiz.duration;
    updatedQuiz.difficulty = difficulty || updatedQuiz.difficulty;
    updatedQuiz.major = major || updatedQuiz.major;
    updatedQuiz.question_count = question_count || updatedQuiz.question_count;

    return updatedQuiz;
}

export const removeQuiz = async (id) => {
    const deletedQuiz = await Quiz.destroy({
        where: { id },
    });
    return deletedQuiz;
}

export const addQuizzesFromExcel = async (quizList) => {
    const createdQuizzes = [];
    for (const item of quizList) {
        const {title, duration, difficulty, major, description} = item;
        if(!title || !duration || !difficulty || !major) continue;
        const quiz = await Quiz.create({
            title,
            duration,
            difficulty,
            major,
            description,
        });
        createdQuizzes.push(quiz);
    }
    return createdQuizzes;
}