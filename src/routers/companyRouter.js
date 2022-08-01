import { Router } from "express";
import companyController from "../controllers/companyController.js";
import { authenticateToken } from "../middlewares/authenticationMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { companySchema } from "../schemas/companySchema.js";

const companyRouter = Router()

companyRouter.post('/create', validateSchemaMiddleware(companySchema), authenticateToken, companyController.createCompany)
companyRouter.get('/getBalance/:companyId', authenticateToken, companyController.getCompanyBalance)

export default companyRouter