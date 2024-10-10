import Joi from "joi";

const bookSchema = Joi.object ({
    title: Joi.string().required(true),
  author: Joi.string().required(true),
  genre: Joi.string().required().valid('Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'Children book').required(),
  description : Joi.string().required(),
  publisher: Joi.string().required(),
  date: Joi.number().integer().min(1600).max(new Date().getFullYear()).required(),
})

export const validateBook = (book) => {
    return bookSchema.validate(book);
  };