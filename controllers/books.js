// controllers/bookController.mjs
import Book from '../models/bookModel.js';

// Add a new book
export const addBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send(book);
};

// Get all books
export const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.send(books);
};

// Get book by ID
export const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.send(book);
};

// Update book
export const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(book);
};

// Delete book
export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.send('Book deleted');
};


