import Favorite from "../models/favorites.js"
import Quiz from "../models/quiz.js";

export const createNewQuizFav = async (userId, quizId) => {
    const newQuizFav = await Favorite.create({
        user_id: userId,
        quiz_id: quizId,
    });
    return newQuizFav;
};

export const getFavorite = async (userId) => {
    const getFavQuizzes = await Favorite.findAll({
        where: {
            user_id: userId,
        },
        include: {
            model: Quiz,
        }
    });
    return getFavQuizzes;
};

export const deleteFavorite = async ( id ) => {
    const deletedFavQuiz = await Favorite.destroy({
        where: {
            id: id,
        },
    });
    return deletedFavQuiz;
}