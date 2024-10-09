import { Router } from "express";
import { addReview, deleteOneReview, getAllReviews, getOneReview, updateOneReview } from "../controllers/review.js";




const reviewRouter = Router();

// Define Router 

reviewRouter.get('/reviews', getAllReviews)

reviewRouter.get('/reviews/:id', getOneReview)

reviewRouter.post('/reviews', addReview)

reviewRouter.delete('/reviews/:id', deleteOneReview)

reviewRouter.patch('/reviews/:id', updateOneReview)

// Export Router

export default reviewRouter;
