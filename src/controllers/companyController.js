import httpStatus from "http-status"
import companyService from "../services/companyService"

async function createCompany(req, res) {
  const company = req.body

  await companyService.createCompany(company.userId, company.name, company.salary)

  res.sendStatus(httpStatus.OK)
}

async function getCompanyBalance(req, res) {
  const { companyId } = req.params

  const balance = await companyService.getCompanyBalance(companyId)

  res.send({ balance }).sendStatus(httpStatus.OK)
}

export default {
  createCompany,
  getCompanyBalance
}