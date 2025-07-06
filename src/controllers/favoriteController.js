import { createNewQuizFav } from "../services/favorite_services.js";

export const addNewFavorite = async (req, res) => {
    const { quiz_id } = req.params;
    const { user_id } = req.body;
    try {
        if (!quiz_id || !user_id) {
            return res.status(401).json({
                message: 'Không đầy đủ thông tin quiz và user'
            });
        }

        const quizFavorite = await createNewQuizFav(user_id, quiz_id);
        return res.status(200).json({ message: 'Thêm sản phẩm yêu thích thành công!', quizFavorite: quizFavorite });
    } catch (error) {
        console.error('Server error: ', error.message);
        return res.status(500).json(error.message);
    }
}