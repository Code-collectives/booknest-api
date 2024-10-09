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
        const oneAuthor = await AuthorModel.findById(req.params.id);

        res.status(200).json(oneAuthor);
    } catch (error) {
        next(error)

    }
}


export const addAuthor = async (req, res, next) => {

    try {
       const newAuthor =  await AuthorModel.create(req.body);

        res.status(201).json({
            message :'Author was added!',
            author : newAuthor
        });
    } catch (error) {
        next(error)

    }
}

export const updateAuthorInfo = async (req, res, next) => {

    try {
       const updatedAuthor = await AuthorModel.findByIdAndUpdate(req.params.id, req.body, {new : true});

        res.status(200).json({
            message :'Author was updated!',
            author : updatedAuthor
        });
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