import { Router } from "express";
import employeesController from "../controllers/employeesController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";

const employeeRouter = Router()

employeeRouter.get('/company/:companyId', authenticateToken, employeesController.getCompanyEmployees)
employeeRouter.get('/payroll/:companyId', authenticateToken, employeesController.getCompanyPayroll)
employeeRouter.patch('/paySalary/:companyId', authenticateToken, employeesController.payEmployees)

export default employeeRouter