import { Router } from "express";
import userController from "../controllers/userController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { hireUserSchema } from "../schemas/hireUserSchema";
import { userSchema } from "../schemas/userSchema";

const userRouter = Router()

userRouter.post('/signUp', validateSchemaMiddleware(userSchema), userController.signUp)
userRouter.post('/signIn', validateSchemaMiddleware(userSchema), userController.signIn)
userRouter.patch('/hire', validateSchemaMiddleware(hireUserSchema), userController.hireUser)
userRouter.patch('/fire/:userId', userController.fireUser)

export default userRouter