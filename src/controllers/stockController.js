import httpStatus from "http-status"
import stockService from "../services/stockService"

async function createProduct(req, res) {
  const product = req.body

  await stockService.createProduct(product)

  res.sendStatus(httpStatus.OK)
}

async function deleteProduct(req, res) {
  const { productId } = req.params

  await stockService.deleteProduct(parseInt(productId))

  res.sendStatus(httpStatus.OK)
}

async function updateProduct(req, res) {
  const product = req.body
  const { productId } = req.params

  await stockService.updateProduct(product, productId)

  res.sendStatus(httpStatus.OK)
}

async function updateProductStock(req, res) {
  const { productId, amount} = req.body

  await stockService.updateProductStock(productId, amount)

  res.sendStatus(httpStatus.OK)
}

async function findProductsByBranch(req, res) {
  const { branchId } = req.params

  const products = await stockService.findProductsByBranch(parseInt(branchId))

  res.send(products).status(httpStatus.OK)
}

async function findProductsByName(req, res) {
  const { name, companyId} = req.params

  const products = await stockService.findProductsByName(name, parseInt(companyId))

  res.send(products).status(httpStatus.OK)
}

async function getCompanyProducts(req, res) {
  const { companyId } = req.params

  const products = await stockService.getCompanyProducts(parseInt(companyId))

  res.send(products).status(httpStatus.OK)
}

export default {
  createProduct,
  deleteProduct,
  updateProduct,
  updateProductStock,
  findProductsByBranch,
  findProductsByName,
  getCompanyProducts
}