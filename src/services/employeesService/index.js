import balanceRepository from "../../repositories/balanceRepository";
import companyRepository from "../../repositories/companyRepository";
import userRepository from "../../repositories/userRepository";
import { companyNotFoundError } from "./errors";

async function getCompanyEmployees(companyId) {
  await getCompanyOrFail(companyId)

  const employeesList = await userRepository.getCompanyEmployees(companyId)

  return employeesList
}

async function getCompanyPayRoll(companyId) {
  await getCompanyOrFail(companyId)

  const payRoll = await userRepository.getCompanyPayroll(companyId)

  return payRoll
}

async function payEmployees(companyId) {
  const payRoll = await getCompanyPayRoll(companyId)

  const amount = payRoll._sum * -1

  await balanceRepository.changeBalance(companyId, amount)
}

async function getCompanyOrFail(companyId) {
  const company = await companyRepository.findCompanyById(companyId)
  if(!company) {
    throw companyNotFoundError()
  }
}

export default {
  getCompanyEmployees,
  getCompanyPayRoll,
  payEmployees,
  getCompanyOrFail
}