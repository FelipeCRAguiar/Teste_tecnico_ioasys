import userRepository from "../../repositories/userRepository";
import { duplicatedEmailError, invalidCredentialsError, userNotFoundError } from "./errors";
import bcrypt from 'bcrypt'
import sessionRepository from "../../repositories/sessionRepository";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import employeesService from "../employeesService";

dotenv.config()

async function createUser({email, password}) {
  validateDuplicateEmail(email)

  const hashedPassword = await bcrypt.hash(password, 10)
  await userRepository.createUser({
    email,
    password: hashedPassword
  })
}

async function hireUser(userId, companyId, salary) {
  await findUserById(userId)
  await employeesService.getCompanyOrFail(companyId)

  await userRepository.hire(userId, companyId, salary)
}

async function fireUser(userId) {
  await findUserById(userId)

  await userRepository.fire(userId)
}

async function signIn({email, password}){
  const user = await getUserOrFail(email)

  await validatePassword(password, user.password)

  const token = await createSession(user.id)
  delete user.password

  return {user, token}
}

async function validateDuplicateEmail(email) {
  const userWithSameEmail = await userRepository.findUserByEmail(email)
  if(userWithSameEmail) {
    throw duplicatedEmailError()
  }
}

async function getUserOrFail(email) {
  const user = await userRepository.findUserByEmail(email)
  if(!user) {
    throw invalidCredentialsError()
  }
  return user
}

async function validatePassword(password, userPassword) {
  const isPasswordValid = await bcrypt.compare(password, userPassword)
  if(!isPasswordValid) {
    throw invalidCredentialsError()
  }
}

async function createSession(userId) {
  await sessionRepository.deleteSession(userId)

  const token = jwt.sign({ userId }, process.env.JWT_SECRET)

  await sessionRepository.createSession({userId, token})
  
  return token
}

async function findUserById(userId) {
  const user = await userRepository.findById(userId)
  if(!user) {
    throw userNotFoundError()
  }

  return user
}

export default {
  findUserById,
  createUser,
  signIn,
  fireUser,
  hireUser
}