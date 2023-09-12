import { Router } from "express";
import { createUserSchemaReq, updateUserSchemaReq } from "../schemas/userSchemas";
import { verifyBodyMiddleware } from "../middlewares/verifyBodyMiddleware";
import { insertUserController } from "../controllers/users/insertUserController";
import { verifyIfTokenIsValidMiddleware } from "../middlewares/verifyIftokenIsValidMiddleware";
import { ifIsAdminMiddleware } from "../middlewares/ifIsAdminMiddleware";
import { showUserController } from "../controllers/users/showUserController";
import { verifyIdMiddleware } from "../middlewares/verifyIdMiddleware";
import { updateUserController } from "../controllers/users/updateUserController";
import { removeUserController } from "../controllers/users/removeUserController";
import { verifyUserByEmail } from "../middlewares/verifyEmailMiddleware";
import {  validateUserToUpdateMiddleware } from "../middlewares/ownershipVerificationMiddleware";

export const userRoutes: Router = Router();

userRoutes.post("/", verifyUserByEmail, verifyBodyMiddleware(createUserSchemaReq), insertUserController);

userRoutes.get("/", verifyIfTokenIsValidMiddleware, ifIsAdminMiddleware, showUserController);

userRoutes.patch("/:id", validateUserToUpdateMiddleware, updateUserController);

userRoutes.delete("/:id", verifyIdMiddleware, verifyIfTokenIsValidMiddleware, ifIsAdminMiddleware, removeUserController);