import { Router } from "express";
import stockController from "../controllers/stockController.js";
import { authenticateToken } from "../middlewares/authenticationMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { productSchema } from "../schemas/productSchema.js";
import { updateProductSchema } from "../schemas/updateProductSchema.js";
import { updateProductStockSchema } from "../schemas/updateProductStockSchema.js";

const stockRouter = Router()

stockRouter.post('/create', validateSchemaMiddleware(productSchema), authenticateToken, stockController.createProduct)
stockRouter.patch('/update', validateSchemaMiddleware(updateProductSchema), authenticateToken, stockController.updateProduct)
stockRouter.patch('/updateStock', validateSchemaMiddleware(updateProductStockSchema), authenticateToken, stockController.updateProductStock)
stockRouter.delete('/delete/:productId', authenticateToken, stockController.deleteProduct)
stockRouter.get('/company/:companyId', authenticateToken, stockController.getCompanyProducts)
stockRouter.get('/branch/:branchId', authenticateToken, stockController.findProductsByBranch)
stockRouter.get('/name/:companyId/:name', authenticateToken, stockController.findProductsByName)

export default stockRouter