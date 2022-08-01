import { Router } from "express";
import branchController from "../controllers/branchController.js";
import { authenticateToken } from "../middlewares/authenticationMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { branchSchema } from "../schemas/branchSchema.js";

const branchRouter = Router()

branchRouter.post('/create', validateSchemaMiddleware(branchSchema), authenticateToken, branchController.createBranch)
branchRouter.get('/getBranches/:companyId', authenticateToken, branchController.getCompanyBranches)
branchRouter.get('/getBranchesWithSales/:companyId', authenticateToken, branchController.getCompanyBranchesWithProductSales)
branchRouter.get('/getSpecificBranch/:branchId', authenticateToken, branchController.getSpecificBranchData)

export default branchRouter