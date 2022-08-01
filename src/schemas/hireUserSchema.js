import joi from "joi";

export const hireUserSchema = joi.object({
  userId: joi.number().required(),
  companyId: joi.number().required(),
  salary: joi.number().required()
})