import httpStatus from "http-status"
import companyService from "../services/companyService/index.js"

async function createCompany(req, res) {
  const company = req.body

  await companyService.createCompany(company.userId, company.name, company.salary)

  res.sendStatus(httpStatus.OK)
}

async function getCompanyBalance(req, res) {
  const { companyId } = req.params

  const balance = await companyService.getCompanyBalance(parseInt(companyId))
  
  res.send({ balance }).sendStatus(httpStatus.OK)
}

export default {
  createCompany,
  getCompanyBalance
}