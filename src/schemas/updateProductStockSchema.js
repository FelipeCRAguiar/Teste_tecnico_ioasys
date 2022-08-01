import joi from "joi";

export const updateProductStockSchema = joi.object({
  productId: joi.number().required(),
  amount: joi.number().required()
})