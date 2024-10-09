// controllers/bookController.mjs
import BookModel from "../models/books.js";


// Add a new book
export const addBook = async (req, res, next) => {
  const book = new BookModel(req.body);
  await book.save();
  res.status(201).send('Book Added!'); // Send a 201 status for creation
};

// Get all books
export const getAllBooks = async (req, res, next) => {
  const books = await BookModel.find();
  res.send(books);
};

// Update book
export const updateBook = async (req, res, next) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).send('Book not found');
    res.send(book); // Response for the updated book 
  } catch (error) {
    next(error); // Forward error to error handling middleware
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


