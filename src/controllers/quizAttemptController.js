import { startQuiz, getAttemptById, getAllAttempts } from "../services/quiz_attempt_services.js";

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

export const getQuizAttemptData = async (req, res) => {
    const {id} = req.params;

    if (id) {
        const data = await getAttemptById(id);
        return res.status(200).json({ message: `Đã lấy thông tin quiz_attempt ${id}: `, quiz_attempt: data });
    }

    const data = await getAllAttempts();
    return res.status(200).json({ message: `Đã lấy tất cả thông tin quiz_attempts: `, data: data });
}

export const submitQuizAttempt = async (req, res) => {
    const {id} = req.params;

    
}