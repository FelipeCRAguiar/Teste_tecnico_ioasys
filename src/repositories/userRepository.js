import { prisma } from "../db";

async function createUser(user) {
  await prisma.users.create({
    data: user
  })
}

async function findUserByEmail(email) {
  return prisma.users.findUnique({
    where: {
      email: email
    }
  })
}

async function hire(userId, companyId, salary) {
  await prisma.users.update({
    where: {
      id: userId
    },
    data: {
      companyId: companyId,
      salary: salary
    }
  })
}

async function fire(userId) {
  await prisma.users.update({
    where: {
      id: userId
    },
    data: {
      companyId: null,
      salary: null
    }
  })
}

async function getCompanyEmployees(companyId) {
  return prisma.users.findMany({
    where: {
      companyId: companyId
    }
  })
}

async function getCompanyPayroll(companyId) {
  return prisma.users.aggregate({
    where: {
      companyId: companyId
    },
    _sum: {
      salary: true
    }
  })
}

export default {
  createUser,
  findUserByEmail,
  hire,
  fire,
  getCompanyEmployees,
  getCompanyPayroll
}