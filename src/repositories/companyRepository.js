import { prisma } from "../db";

async function createCompany(name) {
  const company =  await prisma.companies.create({
    data: {
      name: name
    }
  })

  return company
}

async function findCompanyByName(name) {
  return prisma.companies.findUnique({
    where: {
      name: name
    }
  })
}

async function findCompanyById(companyId) {
  return prisma.companies.findUnique({
    where: {
      id: companyId
    }
  })
}

export default {
  createCompany,
  findCompanyByName,
  findCompanyById
}