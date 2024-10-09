import { Schema, model, Types } from "mongoose";



const reviewSchema = new Schema ({
    rating : {type: Number, required: true},
    comment : {type: String },
    book : {type: Types.ObjectId, required: true, ref: 'Book'}


});


export const ReviewModel = model('Review', reviewSchema);