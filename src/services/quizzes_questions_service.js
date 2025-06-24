import { where } from "sequelize";
import QuestionQuiz from "../models/question_quiz.js";

export const getAllQuizzesQuestionData = async () => {
    const data = await QuestionQuiz.findAll();
    return data;
}

export const getAllQuestionsByQuiz = async (id) => {
    const data = await QuestionQuiz.findAll({
        where: {quiz_id: id}
    });
    return data;
}

export const findQuizQuestionById = async (id) => {
    const data = await QuestionQuiz.findByPk(id);
    return data;
}

export const createNewQuizQuestion = async (quiz_id, question_id) => {
    const newQuizQuestion = await QuestionQuiz.create({
        quiz_id,
        question_id
    });
    return newQuizQuestion;
}