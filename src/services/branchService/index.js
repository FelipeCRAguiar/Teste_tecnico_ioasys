import branchRepository from "../../repositories/branchRepository";
import { unauthorizedError } from "./errors";

async function createBranch(name, companyId) {
  await branchRepository.createBranch({
    name: name,
    companyId, companyId
  })
}

async function getCompanyBranches(companyId) {
  return branchRepository.getCompanyBranches(companyId)
}

async function getCompanyBranchesWithProductSales(companyId) {
  return branchRepository.getCompanyBranchesWithProductSales(companyId)
}

async function getSpecificBranchData(branchId, userCompanyId) {
  const branch = await checkIfSameCompany(branchId, userCompanyId)

  return branch
}

async function checkIfSameCompany(branchId, userCompanyId) {
  const branch = await branchRepository.getSpecificBranchData(branchId)

  if(branch.companyId !== userCompanyId) {
    throw unauthorizedError()
  }

  return branch
}

export default {
  createBranch,
  getCompanyBranches,
  getCompanyBranchesWithProductSales,
  getSpecificBranchData
}