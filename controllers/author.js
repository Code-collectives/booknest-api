import mongoose from "mongoose";
import { AuthorModel } from "../models/authors.js";
import { addAuthorValidator, updateAuthorValidator } from "../validators/authors.js"



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
        // Validate user input
        const { error, value } = addAuthorValidator.validate(req.body)

        if (error) {
            return res.status(422).json(error)
        }
        // Fecth author from database
        const author = await AuthorModel.create(value);

        // Respond to request
        res.status(201).json(`AUTHOR: '${author.name}' Added Succesfully!`);
    } catch (error) {
        next(error)

    }
}

export const updateAuthorInfo = async (req, res, next) => {
    try {
        // Validate the request body (author update data)
        const { error, value } = updateAuthorValidator.validate(req.body);

        if (error) {
            return res.status(422).json(error);
        }

        // Extract the author ID from params
        const authorId = req.params.id;

        // Ensure the authorId is valid
        if (!mongoose.Types.ObjectId.isValid(authorId)) {
            return res.status(400).json({ message: 'Invalid Author ID' });
        }

        // Fetch and update the author in the database
        const updatedAuthor = await AuthorModel.findByIdAndUpdate(
            authorId,          // The author ID
            value,             // The validated update data
            { new: true }      // Return the updated document
        );

        if (!updatedAuthor) {
            return res.status(404).json({ message: 'Author not found' });
        }

        res.status(200).json(`AUTHOR: '${updatedAuthor.name}' Updated Successfully!`);
    } catch (error) {
        next(error);
    }
};


export const deleteOneAuthor = async (req, res, next) => {

    try {
        await AuthorModel.findByIdAndDelete(req.params.id, req.body, {new:true});

        res.status(200).json('Author was deleted!');
    } catch (error) {
        next(error)

    }
}