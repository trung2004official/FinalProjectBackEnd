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