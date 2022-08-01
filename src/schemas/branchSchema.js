import joi from "joi";

export const branchSchema = joi.object({
  name: joi.string().required(),
  companyId: joi.number.required()
})