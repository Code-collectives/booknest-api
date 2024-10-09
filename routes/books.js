// routes/bookRoutes.mjs
import express from 'express';
import { addBook, getAllBooks, getBookById, updateBook, deleteBook } from '../controllers/books.js';

const router = express.Router();

router.post('/books', addBook);         // Add new book
router.get('/books', getAllBooks);      // Get all books
router.get('/books/:id', getBookById);  // Get book by ID
router.patch('/books/:id', updateBook);   // Update book by ID
router.delete('/books/:id', deleteBook); // Delete book by ID

export default router;

