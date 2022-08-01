import httpStatus from "http-status"
import employeesService from "../services/employeesService"

async function payEmployees(req, res) {
  const { companyId } = req.params

  await employeesService.payEmployees(parseInt(companyId))

  res.sendStatus(httpStatus.OK)
}

async function getCompanyEmployees(req, res) {
  const { companyId } = req.params

  const employees = await employeesService.getCompanyEmployees(parseInt(companyId))

  res.send(employees).status(httpStatus.OK)
}

async function getCompanyPayroll(req, res) {
  const { companyId } = req.params

  const payroll = await employeesService.getCompanyPayRoll(parseInt(companyId))

  res.send(payroll).status(httpStatus.OK)
}

export default {
  payEmployees,
  getCompanyEmployees,
  getCompanyPayroll
}