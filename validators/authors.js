import Joi from "joi";

export const addAuthorValidator = Joi.object({
    name : Joi.string().required(),
    bio : Joi.string().required(),
});

export const updateAuthorValidator = Joi.object ({
    name : Joi.string(),
    bio:Joi.string(),
})
