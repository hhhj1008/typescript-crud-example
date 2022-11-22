import express from "express";
import { AuthController } from "../controllers/auth";

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post("/signup", authController.signUp);
authRouter.post("/login", authController.login);

export default authRouter;
