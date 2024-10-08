import { ReviewModel } from "../models/review.js";

export const getAllReviews = async (req, res, next) => {


    try {
        const reviews = await ReviewModel.find(req.body);

        res.status(200).json(reviews);

    } catch (error) {
        next(error);

    }

}

export const addOneReview = async (req, res, next) => {


    try {

        await ReviewModel.create(req.body);

        res.status(201).json('Review was posted!');

    } catch (error) {
        next(error);

    }

}