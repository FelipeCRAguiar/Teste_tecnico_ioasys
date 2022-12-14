import branchRepository from "../../repositories/branchRepository.js";
import stockRepository from "../../repositories/stockRepository.js";
import employeesService from "../employeesService/index.js";
import { branchNotFoundError, productNotFoundError } from "./errors.js";

async function createProduct(data) {
  await getBranchOrFail(data.branchId)

  await stockRepository.creatProduct(data)
}

async function deleteProduct(productId) {
  await getProductOrFail(productId)

  await stockRepository.deleteProduct(productId)
}

async function updateProduct(data, productId) {
  await getProductOrFail(productId)

  await stockRepository.updateProduct(data, productId)
}

async function updateProductStock(productId, amount) {
  await getProductOrFail(productId)

  await stockRepository.updateProductStock(amount, productId)
}

async function findProductsByName(name, companyId) {
  const products = await stockRepository.findProductsByName(name, companyId)
  
  if(!products) {
    throw productNotFoundError()
  }

  return products
}

async function findProductsByBranch(branchId) {
  await  getBranchOrFail(branchId)

  const products = await stockRepository.getProductByBranch(branchId)

  return products
}

async function getCompanyProducts(companyId) {
  await employeesService.getCompanyOrFail(companyId)

  const products = await stockRepository.getCompanyProducts(companyId)

  return products
}

async function getBranchOrFail(branchId) {
  const branch = await branchRepository.getSpecificBranchData(branchId)
  if(!branch) {
    throw branchNotFoundError()
  }
}

async function getProductOrFail(productId) {
  const product = await stockRepository.findProductById(productId)

  if(!product) {
    throw productNotFoundError()
  }

  return product
}

export default {
  createProduct,
  deleteProduct,
  updateProduct,
  updateProductStock,
  findProductsByName,
  findProductsByBranch,
  getCompanyProducts,
  getBranchOrFail,
  getProductOrFail
}