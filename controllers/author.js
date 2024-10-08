import { AuthorModel } from "../models/authors.js";


export const getAuthor = async (req, res, next) => {

    try {
        const authors = await AuthorModel.find(req.body);

        res.status(200).json(authors);
    } catch (error) {
        next(error)

    }
}


export const addAuthor = async (req, res, next) => {

    try {
        await AuthorModel.create(req.body);

        res.status(201).json('Author was added!');
    } catch (error) {
        next(error)

    }
}