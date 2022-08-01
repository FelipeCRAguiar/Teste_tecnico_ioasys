import { Router } from "express";
import branchController from "../controllers/branchController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { branchSchema } from "../schemas/branchSchema";

const branchRouter = Router()

branchRouter.post('/create', validateSchemaMiddleware(branchSchema), authenticateToken, branchController.createBranch)
branchRouter.get('/getBranches/:companyId', authenticateToken, branchController.getCompanyBranches)
branchRouter.get('/getBranchesWithSales/:companyId', authenticateToken, branchController.getCompanyBranchesWithProductSales)
branchRouter.get('/getSpecificBranch/:branchId', authenticateToken, branchController.getSpecificBranchData)

export default branchRouter