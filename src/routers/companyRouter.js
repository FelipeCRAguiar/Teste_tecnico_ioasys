import { Router } from "express";
import companyController from "../controllers/companyController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { companySchema } from "../schemas/companySchema";

const companyRouter = Router()

companyRouter.post('/createCompany', validateSchemaMiddleware(companySchema), authenticateToken, companyController.createCompany)
companyRouter.get('/getCompanyBalance/:companyId', authenticateToken, companyController.getCompanyBalance)

export default companyRouter