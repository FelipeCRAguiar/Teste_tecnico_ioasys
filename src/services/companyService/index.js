import balanceRepository from "../../repositories/balanceRepository";
import companyRepository from "../../repositories/companyRepository";
import employeesService from "../employeesService";
import userService from "../userService";

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