import balanceRepository from "../../repositories/balanceRepository";
import companyRepository from "../../repositories/companyRepository";
import userService from "../userService";

async function createCompany(userId, name, salary) {
  const company = await companyRepository.createCompany(name)

  await userService.hireUser(userId, company.id, salary)

  await balanceRepository.createBalance({companyId: company.id})
}

export default {
  createCompany
}