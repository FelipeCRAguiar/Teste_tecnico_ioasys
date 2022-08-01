import httpStatus from "http-status"
import salesService from "../services/salesService"

async function postSales(req, res) {
  const { saleList } = req.body

  await salesService.postSale(saleList)

  res.sendStatus(httpStatus.OK)
}

async function getProductSales(req, res) {
  const { productId } = req.params

  const product = await salesService.getProductSales(productId)

  res.send(product).status(httpStatus.OK)
}