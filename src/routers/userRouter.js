import { Router } from "express";
import userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { hireUserSchema } from "../schemas/hireUserSchema.js";
import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router()

userRouter.post('/signUp', validateSchemaMiddleware(userSchema), userController.signUp)
userRouter.post('/signIn', validateSchemaMiddleware(userSchema), userController.signIn)
userRouter.patch('/hire', validateSchemaMiddleware(hireUserSchema), userController.hireUser)
userRouter.patch('/fire/:userId', userController.fireUser)

export default userRouter