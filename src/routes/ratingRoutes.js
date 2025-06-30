import e from "express";
import { createRating, getRatings } from "../controllers/ratingController.js";

const router = e.Router();

router.post('/quiz/:quiz_id', createRating);
router.get('/', getRatings);

export default router;