import Joi from "joi";

export const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required "name"`,
    "string.base": `"name" must be string`,
  }),
  email: Joi.string().messages({
    "string.base": `"email" must be string`,
  }),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

export const contactFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": `missing field "favorite"`,
  }),
});
