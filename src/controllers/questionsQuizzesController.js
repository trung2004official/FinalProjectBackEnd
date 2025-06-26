import Question from "../models/question.js";
import Answer from "../models/answer.js";
import { getAllQuizzesQuestionData, getAllQuestionsByQuiz, findQuizQuestionById, createNewQuizQuestion, findQuesionExisted, getQuestionsNotInThisQuiz, deleteQuizQuestion } from "../services/quizzes_questions_service.js"
import { getQuizById } from "../services/quiz_services.js";
import { getQuestionById } from "../services/question_services.js";

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

export const createQuizQuestion = async (req, res) => {
    const {quizId} = req.params;
    const {question_id} = req.body;

    if (!quizId || !question_id) {
        return res.status(400).json({message: 'Vui lòng cung cấp đầy đủ thông tin'});
    }

    const existedQuestion = await findQuesionExisted(quizId, question_id);

    if (existedQuestion) {
        return res.status(409).json({message: 'Câu hỏi đã tồn tại trong quiz này'});
    }

    try {
        const quiz = await getQuizById(quizId);
        if (!quiz) {
            return res.status(404).json({message: 'Quiz không tồn tại'});
        }

        const question = await getQuestionById(question_id);
        if (!question) {
            return res.status(404).json({message: 'Câu hỏi không tồn tại'});
        }

        const newQuizQuestion = await createNewQuizQuestion(quizId, question_id);
        return res.status(201).json({message: 'Đã thêm câu hỏi vào quiz thành công', quizQuestion: newQuizQuestion});
    } catch (error) {
        console.error('Lỗi khi thêm câu hỏi vào quiz: ', error);
        return res.status(500).json({message: 'Lỗi khi thêm câu hỏi vào quiz', error: error.message});
    }
}

export const removeQuizQuestion = async (req, res) => {
    const {quizId} = req.params;
    const {question_id} = req.body;
    if (!quizId || !question_id) {
        return res.status(400).json({message: 'Vui lòng cung cấp đầy đủ thông tin'});
    }
    try {
        await deleteQuizQuestion(quizId, question_id);
        return res.status(200).json({message: 'Đã xóa câu hỏi khỏi quiz thành công'});
    } catch (error) {
        console.error('Lỗi khi xóa câu hỏi khỏi quiz: ', error);
        return res.status(500).json({message: 'Lỗi khi xóa câu hỏi khỏi quiz', error: error.message});
    }
}

export const getQuestionsNotInQuiz = async (req, res) => {
    const {quizId} = req.params;
    if (!quizId) {
        return res.status(400).json({message: 'Vui lòng cung cấp quizId'});
    }
    try {
        const questionsNotInQuiz = await getQuestionsNotInThisQuiz(quizId);

        return res.status(200).json({message: 'Đã lấy danh sách câu hỏi không có trong quiz', questions: questionsNotInQuiz});
        
    } catch (error) {
        console.error('Lỗi khi lấy câu hỏi không có trong quiz: ', error);
        return res.status(500).json({message: 'Lỗi khi lấy câu hỏi không có trong quiz', error: error.message});
    }
}