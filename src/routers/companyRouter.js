import { Router } from "express";
import companyController from "../controllers/companyController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { companySchema } from "../schemas/companySchema";

const companyRouter = Router()

companyRouter.post('/create', validateSchemaMiddleware(companySchema), authenticateToken, companyController.createCompany)
companyRouter.get('/getBalance/:companyId', authenticateToken, companyController.getCompanyBalance)

export default companyRouter