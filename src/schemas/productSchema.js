import joi from "joi";

export const productSchema = joi.object({
  productName: joi.string().required(),
  productQuantity: joi.number().required(),
  productPrice: joi.number().required(),
  branchId: joi.number().required()
})