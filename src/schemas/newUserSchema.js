import joi from "joi";

export const newUserSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
  name: joi.string().required()
})