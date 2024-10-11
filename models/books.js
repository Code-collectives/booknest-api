// models/bookModel.js
import mongoose from 'mongoose';

const {  Types } = mongoose; 

const bookSchema = new mongoose.Schema({
  title: {type: String},
  author: {type: Types.ObjectId, required: true, ref :'Author'},
  genre: {type:String},
  description: {type :String} ,
  publisher: { type:String},
  year: {type: Number},
  img_url:{type: String} 
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;






































































