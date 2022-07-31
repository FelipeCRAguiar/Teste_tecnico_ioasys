import { prisma } from "../db";

async function createSession(data) {
  await prisma.sessions.create({
    data: data
  })
}

async function deleteSession(userId) {
  await prisma.sessions.deleteMany({
    where: {
      userId: userId
    }
  })
}

export default {
  createSession,
  deleteSession
}