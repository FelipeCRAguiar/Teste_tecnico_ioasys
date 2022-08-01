import { Router } from "express";
import salesController from "../controllers/salesController.js";
import { authenticateToken } from "../middlewares/authenticationMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { saleSchema } from "../schemas/salesSchema.js";

const salesRouter = Router()

salesRouter.post('/postSales', validateSchemaMiddleware(saleSchema), authenticateToken, salesController.postSales)
salesRouter.get('/getProduct/:productId', authenticateToken, salesController.getProductSales)

export default salesRouter