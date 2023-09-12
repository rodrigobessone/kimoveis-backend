import { Router } from "express";
import { userLoginController } from "../controllers/login/userLoginController";

export const loginRoutes: Router = Router();

loginRoutes.post("/", userLoginController);