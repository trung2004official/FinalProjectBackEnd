import Rating from "../models/rating.js"

export const createNewRating = async (userId, quizId, star, comment) => {
    const newRating = await Rating.create({
        user_id: userId,
        quiz_id: quizId,
        star_rating: star,
        comment: comment
    });
    return newRating;
}

export const getAllRatings = async () => {
    const ratings = await Rating.findAll();
    return ratings;
}