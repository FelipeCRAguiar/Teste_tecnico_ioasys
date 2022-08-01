import httpStatus from "http-status"
import branchService from "../services/branchService"

async function createBranch(req, res) {
  const branch = req.body

  await branchService.createBranch(branch.name, branch.companyId)

  res.sendStatus(httpStatus.OK)
}

async function getCompanyBranches(req, res) {
  const { companyId } = req.params

  const branches = await branchService.getCompanyBranches(companyId)

  res.send(branches).status(httpStatus.OK)
}

async function getCompanyBranchesWithProductSales(req, res) {
  const { companyId } = req.params

  const branches = await branchService.getCompanyBranchesWithProductSales(companyId)

  res.send(branches).status(httpStatus.OK)
}

async function getSpecificBranchData(req, res) {
  const { branchId } = req.params
  const user = res.locals.user

  const branch = await branchService.getSpecificBranchData(branchId, user.companyId)

  res.send(branch).status(httpStatus.OK)
}

export default {
  createBranch,
  getCompanyBranches,
  getCompanyBranchesWithProductSales  ,
  getSpecificBranchData
}