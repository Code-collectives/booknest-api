// controllers/bookController.mjs
import Book from '../models/books.js';

// Add a new book
export const addBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).send('Book Added!'); // Send a 201 status for creation
};

// Get all books
export const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.send(books);
};
// Get book by ID
export const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).send('Book not found');
  res.send(book);
};

// Update book
export const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).send('Book not found');
  res.send(book);
};

// Delete book
export const deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).send('Book not found');
  res.send('Book deleted'); // Response indicating successful deletion
};


