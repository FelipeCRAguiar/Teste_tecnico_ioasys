import balanceRepository from "../../repositories/balanceRepository.js";
import companyRepository from "../../repositories/companyRepository.js";
import employeesService from "../employeesService/index.js";
import userService from "../userService/index.js";

async function createCompany(userId, name, salary) {
  const company = await companyRepository.createCompany(name)

  await userService.hireUser(userId, company.id, salary)

  await balanceRepository.createBalance({companyId: company.id})
}

async function getCompanyBalance(companyId) {
  await employeesService.getCompanyOrFail(companyId)

  const balance = await balanceRepository.getCompanyBalance(companyId)

  return balance
}

export default {
  createCompany,
  getCompanyBalance
}