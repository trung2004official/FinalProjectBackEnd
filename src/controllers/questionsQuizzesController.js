import Question from "../models/question.js";
import Answer from "../models/answer.js";
import { getAllQuizzesQuestionData, getAllQuestionsByQuiz } from "../services/quizzes_questions_service.js"
import { getQuizById } from "../services/quiz_services.js";

export const getQuizzesQuestions = async (req, res) => {
    const {id} = req.params;

    if (id) {
        const data = await getAllQuestionsByQuiz(id);
        const questionIds = data.map(q => q.question_id);

        const questions = await Question.findAll(
            {
                where: { id: questionIds },
                include: [{ model: Answer, as: 'answers'}]
            },
        )
        const quiz = await getQuizById(id);
        return res.status(200).json({message: 'Đã lấy dữ liệu bài thi: ', questions: questions, quiz: quiz});
    }

    const allData = await getAllQuizzesQuestionData();
    return res.status(200).json({message: 'Đã lấy dữ liệu questions_quizzes: ', data: allData});
};

