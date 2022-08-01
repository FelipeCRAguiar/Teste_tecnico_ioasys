import { prisma } from "../db.js"

async function createBranch(data) {
  await prisma.branches.create({
    data: data
  })
}

async function getCompanyBranches(companyId) {
  return prisma.branches.findMany({
    where: {
      companyId: companyId
    }
  })
}

async function getCompanyBranchesWithProductSales(companyId) {
  return prisma.branches.findMany({
    where: {
      companyId: companyId
    },
    include: {
      Stock: {
        include: {
          Sales: true
        }
      }
    }
  })
}

async function getSpecificBranchData(branchId) {
  return prisma.branches.findUnique({
    where: {
      id: branchId
    },
    include: {
      Stock: {
        include: {
          Sales: true
        }
      }
    }
  })
}

export default {
  createBranch,
  getCompanyBranches,
  getCompanyBranchesWithProductSales,
  getSpecificBranchData
}