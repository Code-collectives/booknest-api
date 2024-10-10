// controllers/bookController.mjs
import BookModel from "../models/books.js";
import { validateBook } from "../validators/books.js";


// Add a new book
export const addBook = async (req, res, next) => {

  const {error} = validateBook(req.body);
  if (error) return res.status(422).send('error')

    const {title, author, genre, description, publisher, year, img_url } = req.body;
  const  newBook = new BookModel( {title, author, genre, description, publisher, year, img_url});
  await newBook.save();
  res.status(201).send({
    message: 'Book Added!',
    // book: book
  }); // Send a 201 status for creation
};

// Get all books
export const getAllBooks = async (req, res, next) => {
  const books = await BookModel.find();
  res.send(books);
};

// Update book
export const updateBook = async (req, res, next) => {
  const {error} = validateBook(req.body);
  if (error) return res.status(422).send('error');

  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).send('Book not found');
    res.send({
      message: 'Book was updated',
      book:book
    }); // Response for the updated book 
  } catch (error) {
    res.status(500) .send('Error updating book');    
  }
};

// Delete book
export const deleteBook = async (req, res, next) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.send('Book deleted'); // Response indicating successful deletion
  } catch (error) {
    next(error); // Forward error to error handling middleware
  }
};

// Get book by ID
export const getBookById = async (req, res, next) => {
  try { 
    const book = await BookModel.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found'); // Check before sending a response
    res.send(book); // Send the found book
  } catch (error) {
    next(error);
  }
};


