import joi from "joi";

export const updateProductSchema = joi.object({
  productName: joi.string(),
  productPrice: joi.number()
})