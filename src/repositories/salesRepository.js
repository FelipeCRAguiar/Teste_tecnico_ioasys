import { prisma } from "../db.js";

async function createSale(data) {
  await prisma.sales.create({
    data: data
  })
}

async function getNumberOfSoldProducts(productId) {
  return prisma.sales.groupBy({
    by: ['productId'],
    where: {
      productId: productId
    },
    _sum: {
      quantity: true
    }
  })
}

export default {
  createSale,
  getNumberOfSoldProducts
}