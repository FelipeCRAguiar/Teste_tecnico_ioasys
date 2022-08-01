import joi from "joi";

export const saleSchema = joi.object({
  saleList: joi.array().required()
})