import Joi from "joi";

const bookSchema = Joi.object ({
    title: Joi.string().required(true),
  author: Joi.string().required(true),
  genre: Joi.string().required().valid('Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'Children Book').required(),
  description : Joi.string().required(),
  publisher: Joi.string().required(),
  year: Joi.number().integer().min(1600).max(new Date().getFullYear()).required(),
  img_url:Joi.string().required()
})

export const validateBook = (book) => {
    return bookSchema.validate(book);
  };