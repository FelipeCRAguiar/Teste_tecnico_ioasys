import cors from "cors";
import express from "express";
import "express-async-errors";
import handleApplicationErrors from "./middlewares/errorHandlingMiddleware.js";
import branchRouter from "./routers/branchRouter.js";
import companyRouter from "./routers/companyRouter.js";
import employeeRouter from "./routers/employeeRouter.js";
import salesRouter from "./routers/salesRouter.js";
import stockRouter from "./routers/stockRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
app
  .use(cors())
  .use(express.json())
  .use('/users', userRouter)
  .use('/company', companyRouter)
  .use('/branch', branchRouter)
  .use('/employee', employeeRouter)
  .use('/sales', salesRouter)
  .use('/stock', stockRouter)
  .use(handleApplicationErrors)


export default app;