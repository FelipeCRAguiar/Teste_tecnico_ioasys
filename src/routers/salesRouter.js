import { Router } from "express";
import salesController from "../controllers/salesController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { saleSchema } from "../schemas/salesSchema";

const salesRouter = Router()

salesRouter.post('/postSales', validateSchemaMiddleware(saleSchema), authenticateToken, salesController.postSales)
salesRouter.get('/getProduct/:productId', authenticateToken, salesController.getProductSales)

export default salesRouter