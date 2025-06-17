import { startQuiz } from "../services/quiz_attempt_services.js";

export const startQuizAttempt = async (req, res) => {
    const {user_id, quiz_id} = req.body;

    if (!user_id || !quiz_id) {
        return res.status(400).json({message: 'Không đầy đủ dữ liệu đầu vào.'});
    }

    try {
        const newAttempt = await startQuiz(user_id, quiz_id);
        return res.status(201).json({
            message: 'Đã bắt đầu làm bài',
            attempt_id: newAttempt.id,
            start_time: newAttempt.start_time,
        });
    } catch (error) {
        console.error('Lỗi tạo quiz_attempt: ',error);
        return res.status(500).json('Lỗi khi bắt đầu bài thi: ',error);
    }
}