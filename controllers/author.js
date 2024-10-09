import { AuthorModel } from "../models/authors.js";


export const getAuthors = async (req, res, next) => {

    try {
        const authors = await AuthorModel.find(req.body);

        res.status(200).json(authors);
    } catch (error) {
        next(error)

    }
}
export const getOneAuthor = async (req, res, next) => {

    try {
        const author = await AuthorModel.find(req.body);

        res.status(200).json(author);
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

export const updateAuthorInfo = async (req, res, next) => {

    try {
        await AuthorModel.findByIdAndUpdate(req.params.id, req.body, {new : true});

        res.status(200).json('Author was updated!');
    } catch (error) {
        next(error)

    }
}
export const deleteOneAuthor = async (req, res, next) => {

    try {
        await AuthorModel.findByIdAndDelete(req.params.id, req.body, {new:true});

        res.status(200).json('Author was deleted!');
    } catch (error) {
        next(error)

    }
}