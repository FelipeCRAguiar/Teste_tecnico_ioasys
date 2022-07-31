import { prisma } from "../db";

async function createCompany(name) {
  const company =  await prisma.companies.create({
    data: {
      name: name
    }
  })

  return company
}

export default {
  createCompany
}