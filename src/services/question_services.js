import Answer from "../models/answer.js"
import Question from "../models/question.js"

export const getAnswersData = async (id) => {
    const answers = await Question.findAll({
        where: id,
        include: [{model: Answer, as: 'answers'}]
    });
    return answers;
};

export const getAllQuestions = async () => {
    const data = await Question.findAll();
    return data;
}

export const findQuesionExisted = async (content) => {
    const existedQuestion = await Question.findOne({ content });
    return existedQuestion;
}

export const addQuestion = async (content, major, difficulty, explaination) => {
    const newQuestion = await Question.create({
        content,
        major,
        difficulty,
        explaination,
    });
    return newQuestion;
}

export const getQuestionById = async (id) => {
    const question = await Question.findByPk(id);
    return question;
}

export const updateQuestion = async (id, content, major, explaination) => {
    const updatedQuestion = await Question.findByPk(id);

    if (!updatedQuestion) {
        return 0;
    }

    updatedQuestion.content = content;
    updatedQuestion.major = major;
    updatedQuestion.explaination = explaination;

    return updatedQuestion;
}