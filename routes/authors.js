import { Router } from "express";
import { addAuthor, getAuthor } from "../controllers/author.js";



const authorRouter = Router();

// Define Router 

authorRouter.get('/authors', getAuthor);

authorRouter.post('/authors', addAuthor);

// Export Router

export default authorRouter;

