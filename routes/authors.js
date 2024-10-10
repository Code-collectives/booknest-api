import { Router } from "express";
import { addAuthor, deleteOneAuthor, getAuthors, getOneAuthor, updateAuthorInfo } from "../controllers/author.js";



const authorRouter = Router();

// Define Router 

authorRouter.get('/authors', getAuthors);

authorRouter.post('/authors', addAuthor);

authorRouter.get('/authors/:id', getOneAuthor);

authorRouter.patch('/authors/:id', updateAuthorInfo);

authorRouter.delete('/authors/:id', deleteOneAuthor);







// Export Router

export default authorRouter;

