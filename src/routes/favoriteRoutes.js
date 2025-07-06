import e from "express";
import { addNewFavorite } from "../controllers/favoriteController.js";

const router = e.Router();

router.post(`/add-favorite/${quiz_id}`, addNewFavorite);

export default router;