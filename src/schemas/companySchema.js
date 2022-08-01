import joi from "joi";

export const companySchema = joi.object({
  name: joi.string().required(),
  userId: joi.number().required(),
  salary: joi.number().required()
})