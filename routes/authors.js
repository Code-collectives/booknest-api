import { Router } from "express";
import { addAuthor, getAuthor } from "../controllers/author.js";



const authorRouter = Router();

// Define Router 

reviewAuthor.get('/author', getAuthor)

reviewAuthor.post('/author', addAuthor)

// Export Router

export default authorRouter;

