import { createNewQuizFav, deleteFavorite } from "../services/favorite_services.js";

export const addNewFavorite = async (req, res) => {
    const { quiz_id, user_id } = req.params;
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

export const getAllFavoriteQuizzes = async (req, res) => {
    const {user_id} = req.params;
    if (!user_id) {
        return res.status(401).json({
            message: 'Chưa có thông tin người dùng',
        });
    }

    const favQuizzes = await getAllFavoriteQuizzes(user_id);
    return res.status(200).json({ message: 'Lấy thông tin quiz thành công', favQuizzes: favQuizzes
    });
}

export const deleteFavoriteQuiz = async (req, res) => {
    const {id} = req.params;
    if(!id) {
        return res.status(401).json({message: 'Không tìm thấy quiz yêu thích'});
    }
    const deletedFavQuiz = await deleteFavorite(id);
    return res.status(200).json({message: 'Đã xóa 1 đề thi yêu thích', deletedFavQuiz});
}