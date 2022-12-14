import { prisma } from "../db.js";

async function creatProduct(data) {
  await prisma.stock.create({
    data: data
  })
}

async function updateProduct(data, productId) {
  await prisma.stock.update({
    where: {
      id: productId
    },
    data: data
  })
}

async function deleteProduct(productId) {
  await prisma.stock.delete({
    where: {
      id: productId
    }
  })
}

async function findProductsByName(name, companyId) {
  return prisma.stock.findMany({
    where: {
      productName: name,
      Branch: {
        companyId: companyId
      }
    },
    include: {
      Branch: true
    }
  })
}

async function updateProductStock(value, productId) {
  const oldValue = await prisma.stock.findUnique({
    where: {
      id: productId
    }
  })

  const newValue = oldValue.productQuantity + value

  await prisma.stock.update({
    where: {
      id: productId
    },
    data: {
      productQuantity: newValue
    }
  })
}

async function getProductByBranch(branchId) {
  return prisma.stock.findMany({
    where: {
      branchId: branchId
    }
  })
}

async function getCompanyProducts(companyId) {
  return prisma.stock.groupBy({
    by: ['productName'],
    where: {
      Branch: {
        companyId: companyId
      }
    },
    _sum: {
      productQuantity: true
    }
  })
}

async function findProductById(productId) {
  return prisma.stock.findUnique({
    where: {
      id: productId
    }
  })
}

export default {
  creatProduct,
  updateProduct,
  deleteProduct,
  findProductsByName,
  updateProductStock,
  getProductByBranch,
  getCompanyProducts,
  findProductById
}