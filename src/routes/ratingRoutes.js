import e from "express";
import { createRating } from "../controllers/ratingController.js";

const router = e.Router();

router.post('/quiz/:quiz_id', createRating);

export default router;