import { createNewRating, getAllRatings } from "../services/rating_services.js";

export const createRating = async (req, res) => {
    const {quiz_id} = req.params;
    const {user_id, star, comment} = req.body;

    if(!quiz_id || !user_id || !star) {
        return res.status(400).json({message: 'Không đủ dữ liệu.'});
    }

    const newRating  = await createNewRating(user_id, quiz_id, star, comment);

    return res.status(200).json({message: 'Lượt đánh giá đã được tạo.', rating: newRating});
}

export const getRatings = async (req, res) => {
    try {
        const ratings = await getAllRatings();
        return res.status(200).json({message: 'Đã lấy dữ ratings', ratings: ratings});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}