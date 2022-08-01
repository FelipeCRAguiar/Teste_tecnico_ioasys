import balanceRepository from "../../repositories/balanceRepository";
import branchRepository from "../../repositories/branchRepository";
import salesRepository from "../../repositories/salesRepository";
import stockService from "../stockService";

async function postSale(productList) {
  for(let i = 0; i < productList.length; i++) {
    let product = await stockService.getProductOrFail(productList[i].productId)

    await salesRepository.createSale({
      productId: product.id,
      quantity: productList[i].quantity
    })

    let quantityBought = productList[i].quantity * -1

    await stockService.updateProductStock(product.id, quantityBought)

    const subtotal = productList[i].quantity * product.productPrice

    const branch = await branchRepository.getSpecificBranchData(product.branchId)

    await balanceRepository.changeBalance(branch.companyId, subtotal)
  }
}

async function getProductSales(productId) {
  await stockService.getProductOrFail(productId)

  const sales = await salesRepository.getNumberOfSoldProducts(productId)

  return sales
}

export default {
  postSale,
  getProductSales
}