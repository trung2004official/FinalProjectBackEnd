import e from "express";
import { addNewFavorite, getAllFavoriteQuizzes, deleteFavoriteQuiz } from "../controllers/favoriteController.js";

const router = e.Router();

router.get('/:user_id', getAllFavoriteQuizzes);
router.post(`/add-favorite/:quiz_id/:user_id`, addNewFavorite);
router.delete('/delete-favorite/:id', deleteFavoriteQuiz);

export default router;