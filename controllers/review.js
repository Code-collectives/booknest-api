import { ReviewModel } from "../models/review.js";

export const getAllReviews = async (req, res, next) => {


    try {
        const reviews = await ReviewModel.find(req.body);

        res.status(200).json(reviews);
    } catch (error) {
        next(error);

    }

}
export const getOneReview = async (req, res, next) => {

    try {
      const oneReview =  await ReviewModel.findById(req.params.id);
    
            res.status(200).json(oneReview);
    } catch (error) {
        next (error)
        
    }
    
}



export const addReview = async (req, res, next) => {


    try {

        const review = await ReviewModel.create(req.body);

        res.status(201).json({
            message :'Rview was added!',
            author : review
        });
    } catch (error) {
        next(error);

    }

}

export const updateOneReview = async (req, res, next) => {


    try {

       const updateReview = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, {new :true});

        res.status(200).json({
            message :'Review was updated!',
            author : updateReview
        });
    } catch (error) {
        next(error);

    }

}
export const deleteOneReview = async (req, res, next) => {


    try {

        await ReviewModel.findByIdAndDelete(req.params.id, req.body, {new :true});

        res.status(200).json('Review was deleted!');
    } catch (error) {
        next(error);

    }

}