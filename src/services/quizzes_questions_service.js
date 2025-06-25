import { where } from "sequelize";
import QuestionQuiz from "../models/question_quiz.js";
import Quiz from "../models/quiz.js";

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
    const count = await QuestionQuiz.count({
        where: {quiz_id}
    });

    await Quiz.update(
        {question_count: count},
        {where: {id: quiz_id}}
    );

    return newQuizQuestion;
}

// export const removeQuizQuestion = async (quiz_id, question_id) => {
//     await QuestionQuiz.destroy({ where: { quiz_id, question_id } });

//     // Đếm lại số câu hỏi của quiz này
//     const count = await QuestionQuiz.count({ where: { quiz_id } });

//     // Cập nhật lại question_count cho quiz
//     await Quiz.update({ question_count: count }, { where: { id: quiz_id } });
// };