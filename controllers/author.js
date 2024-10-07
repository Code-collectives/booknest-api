import { AuthorModel } from "../models/authors.js";


export const getAuthor = async (req, res, next) => {

    try {
        const authors = await AuthorModel.find(req.body);

        res.status(2001).json(authors);
    } catch (error) {
        next(error)

    }
}


export const addAuthor = async (req, res, next) => {

    try {
        await AuthorModel.create(req.body);

        res.status(2001).json('Author was added!');
    } catch (error) {
        next(error)

    }
}