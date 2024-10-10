// models/bookModel.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description : String,
  publisher: String,
  year: Number,
  img_url: String
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;






































































