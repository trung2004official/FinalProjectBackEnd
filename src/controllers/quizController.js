import { Op } from "sequelize";
import Quiz from "../models/quiz.js";
// import QuizAttempt from "../models/quizAttempt.js";
export const getQuizzes = async (req, res) => {
    try {
        const { id } = req.params;
        const { search } = req.query;

        if (id) {
            const quiz = await getQuizzesById(id);
            return res.status(200).json(quiz);
        }

        if (search) {
            const quizzes = await getQuizzesByKeyword(search);
            return res.status(200).json(quizzes);
        }

        const quizzes = await getAllQuizzes();
        return res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error during get quiz: ',error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const startQuizAttempt = async (req, res) => {
    try {
        const { id: quizId } = req.params;
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ message: 'Yêu cầu đăng nhập' });
        }

        const quiz = await Quiz.findByPk(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz không tìm thấy '});
        }

        const attempt = await QuizAttempt.create({
            userId,
            quizId,
            startTime: new Date(),
            status: 'Đang làm bài',
        });

        return res.status(200).json(attempt);
    } catch (error) {
        console.error('Lỗi khi bắt đầu Quiz: ',error);
        return res.status(500).json({ message: `Server Error:`, error: error.message, });
    }
};

export const addNewQuiz = async (req, res) => {
    try {
        const {title, duration, difficulty, major, question_count} = req.body;
        
        if (!title || !duration || !difficulty || !major || !question_count) {
            return res.status(400).json({ message: "Vui lòng cung cấp đầy đủ thông tin" });
        }

        const newQuiz = await Quiz.create({
            title,
            duration,
            difficulty,
            major,
            question_count,
        });
    
        return res.status(201).json({
            message: 'Đã thêm quiz mới',
            quiz: newQuiz,
        });
    } catch (error) {
        console.error('Lỗi khi thêm quiz mới: ',error);
        return res.status(500).json({
            message: 'Lỗi Server',
            error: error.message,
        });
    }
};

export const updateQuiz = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, duration, difficulty, major, question_count} = req.body;

        const quiz = await Quiz.findByPk(id);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz không tồn tại' });
        }

        quiz.title = title || quiz.title;
        quiz.duration = duration || quiz.duration;
        quiz.major = major || quiz.major;
        quiz.difficulty = difficulty || quiz.difficulty;
        quiz.question_count = question_count || quiz.question_count;

        await quiz.save();

        return res.status(200).json({
            message: 'Cập nhật quiz thành công',
            quiz,
        });
    } catch (error) {
        console.error('Lỗi Server: ', error);
        return res.status(500).json({message: 'Lỗi Server: ', error: error.message});
    }
};

export const deleteQuiz = async (req, res) => {
    try {
        const {id} = req.params;

        const quiz = Quiz.findByPk(id);
        if(!quiz) {
            return res.status(404).json({message: 'Quiz không tồn tại'});
        }

        await Quiz.destroy();

        return res.status(200).json({message: 'Xóa Quiz thành công'});
    } catch (error) {
        console.error('Lỗi server: ', error);
        return res.status(500).json({ message: 'Lỗi server', error: error.message});
    }
}

// export const submitAnswer = async (req, res) => {
//        try {
//            const { id: quizId } = req.params;
//            const { questionId, answerId } = req.body;
//            const userId = req.user?.id;

//            if (!userId) {
//                return res.status(401).json({ message: "Yêu cầu đăng nhập" });
//            }

//            const attempt = await QuizAttempt.findOne({
//                where: { userId, quizId, status: 'ongoing' },
//            });
//            if (!attempt) {
//                return res.status(400).json({ message: "Không tìm thấy lượt thi đang thực hiện" });
//            }

//            const question = await Question.findByPk(questionId);
//            if (!question || question.quizId !== parseInt(quizId)) {
//                return res.status(404).json({ message: "Câu hỏi không hợp lệ" });
//            }

//            const answer = await Answer.findByPk(answerId);
//            if (!answer || answer.questionId !== questionId) {
//                return res.status(404).json({ message: "Đáp án không hợp lệ" });
//            }

//            const userAnswer = await UserAnswer.create({
//                quizAttemptId: attempt.id,
//                questionId,
//                answerId,
//            });

//            return res.status(201).json(userAnswer);
//        } catch (error) {
//            console.error("Lỗi khi gửi đáp án:", error);
//            return res.status(500).json({ message: "Lỗi server", error: error.message });
//        }
//    };

//    export const submitQuiz = async (req, res) => {
//        try {
//            const { id: quizId } = req.params;
//            const userId = req.user?.id;

//            if (!userId) {
//                return res.status(401).json({ message: "Yêu cầu đăng nhập" });
//            }

//            const attempt = await QuizAttempt.findOne({
//                where: { userId, quizId, status: 'ongoing' },
//            });
//            if (!attempt) {
//                return res.status(400).json({ message: "Không tìm thấy lượt thi đang thực hiện" });
//            }

//            const userAnswers = await UserAnswer.findAll({
//                where: { quizAttemptId: attempt.id },
//                include: [{ model: Answer }],
//            });

//            let correctCount = 0;
//            for (const userAnswer of userAnswers) {
//                if (userAnswer.Answer.isCorrect) {
//                    correctCount++;
//                }
//            }

//            const quiz = await Quiz.findByPk(quizId);
//            const totalQuestions = quiz.question_count;
//            const score = (correctCount / totalQuestions) * 100;

//            attempt.score = score;
//            attempt.endTime = new Date();
//            attempt.status = 'completed';
//            await attempt.save();

//            return res.status(200).json({
//                correctCount,
//                totalQuestions,
//                score,
//                attempt,
//            });
//        } catch (error) {
//            console.error("Lỗi khi nộp bài:", error);
//            return res.status(500).json({ message: "Lỗi server", error: error.message });
//        }
//    };

const getQuizzesById = async (id) => {
    const quiz = await Quiz.findByPk(id);
    return quiz;
};

const getQuizzesByKeyword = async (search) => {
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

const getAllQuizzes = async () => {
    const quizzes = await Quiz.findAll();
    return quizzes;
};