import { prisma } from "../db.js";

async function createBalance(data) {
  await prisma.balance.create({
    data: data
  })
}

async function changeBalance(companyId, value) {
  const oldBalance = await getCompanyBalance(companyId)

  const newBalance = oldBalance.balance + value

  await prisma.balance.update({
    where: {
      companyId: companyId
    },
    data: {
      balance: newBalance
    }
  })
}

async function getCompanyBalance(companyId) {
  return prisma.balance.findUnique({
    where: {
      companyId: companyId
    }
  })
}

export default {
  createBalance,
  changeBalance,
  getCompanyBalance
}