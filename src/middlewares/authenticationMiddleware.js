import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import { prisma } from '../db.js';
import userService from '../services/userService/index.js';
import dotenv from 'dotenv';
dotenv.config()

export async function authenticateToken(req, res, next) {
  const authorization = req.headers["authorization"];
  if (!authorization) return generateUnauthorizedResponse(res);

  const token = authorization.replace("Bearer ", "");
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET)


    const session = await prisma.sessions.findFirst({
      where: {
        token,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);

    const user = await userService.findUserById(parseInt(userId))

    req.userId = userId;
    res.locals.user = user

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

function unauthorizedError() {
  return {
    name: 'UnauthorizedError',
    message: 'You must be signed in to continue',
  };
}