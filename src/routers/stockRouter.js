import { Router } from "express";
import stockController from "../controllers/stockController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { productSchema } from "../schemas/productSchema";
import { updateProductSchema } from "../schemas/updateProductSchema";
import { updateProductStockSchema } from "../schemas/updateProductStockSchema";

const stockRouter = Router()

stockRouter.post('/create', validateSchemaMiddleware(productSchema), authenticateToken, stockController.createProduct)
stockRouter.patch('/update', validateSchemaMiddleware(updateProductSchema), authenticateToken, stockController.updateProduct)
stockRouter.patch('/updateStock', validateSchemaMiddleware(updateProductStockSchema), authenticateToken, stockController.updateProductStock)
stockRouter.delete('/delete/:productId', authenticateToken, stockController.deleteProduct)
stockRouter.get('/company/:companyId', authenticateToken, stockController.getCompanyProducts)
stockRouter.get('/branch/:branchId', authenticateToken, stockController.findProductsByBranch)
stockRouter.get('/name/:companyId/:name', authenticateToken, stockController.findProductsByName)

export default stockRouter