import Question from "../models/question.js";

export const getQuestions = async (req, res) => {
    const questions = await Question.findAll();
    return res.status(200).json(questions);
}