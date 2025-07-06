import Favorite from "../models/favorites.js"

export const createNewQuizFav = async (userId, quizId) => {
    const newQuizFav = await Favorite.create({
        user_id: userId,
        quiz_id: quizId,
    });
    return newQuizFav;
};