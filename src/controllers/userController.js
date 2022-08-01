import httpStatus from "http-status"
import userService from "../services/userService/index.js"

async function signUp(req, res) {
  const user = req.body

  await userService.createUser(user)

  res.sendStatus(httpStatus.OK)
}

async function signIn(req, res) {
  const user = req.body

  const token = await userService.signIn(user)

  res.send({ token }).status(httpStatus.OK)
}

async function hireUser(req, res) {
  const hiringInformation = req.body

  await userService.hireUser(hiringInformation.userId, hiringInformation.companyId, hiringInformation.salary)

  res.sendStatus(httpStatus.OK)
}

async function fireUser(req, res) {
  const { userId } = req.params

  await userService.fireUser(parseInt(userId))

  res.sendStatus(httpStatus.OK)
}

export default {
  signIn,
  signUp,
  hireUser,
  fireUser
}