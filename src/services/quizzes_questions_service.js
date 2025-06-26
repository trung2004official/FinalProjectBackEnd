import { where, Op } from "sequelize";
import QuestionQuiz from "../models/question_quiz.js";
import Quiz from "../models/quiz.js";
import Question from "../models/question.js";

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

export const findQuesionExisted = async (quiz_id, question_id) => {
    const data = await QuestionQuiz.findOne({
        where: {
            quiz_id,
            question_id
        }
    });
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

export const getQuestionsNotInThisQuiz = async (quiz_id) => {
    const usedQuestionIds = await QuestionQuiz.findAll({
        where: { quiz_id },
        attributes: ['question_id'],
        raw: true,
    });
    const usedIds = usedQuestionIds.map(q => q.question_id);

    return Question.findAll({
        where: {
            id: {
                [Op.notIn]: usedIds.length > 0 ? usedIds : [0] 
            }
        }
    });
};

export const deleteQuizQuestion = async (quiz_id, question_id) => {
    const deleted = await QuestionQuiz.destroy({ where: { quiz_id, question_id } });

    // Đếm lại số câu hỏi của quiz này
    const count = await QuestionQuiz.count({ where: { quiz_id } });

    // Cập nhật lại question_count cho quiz
    await Quiz.update({ question_count: count }, { where: { id: quiz_id } });

    return deleted;
};