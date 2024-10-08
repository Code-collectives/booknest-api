import { Router } from "express";
import { addOneReview, getAllReviews } from "../controllers/review.js";




const reviewRouter = Router();

// Define Router 

reviewRouter.get('/reviews', getAllReviews)

reviewRouter.post('/reviews', addOneReview)

// Export Router

export default reviewRouter;
