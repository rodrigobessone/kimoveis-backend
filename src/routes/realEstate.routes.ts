import { Router } from "express";
import { verifyIfTokenIsValidMiddleware } from "../middlewares/verifyIftokenIsValidMiddleware";
import { verifyBodyMiddleware } from "../middlewares/verifyBodyMiddleware";
import { ifIsAdminMiddleware } from "../middlewares/ifIsAdminMiddleware";
import { insertRealEstateController } from "../controllers/realState/insertRealEstateController";
import { showRealEstateController } from "../controllers/realState/showRealEstateController";
import createRealEstateSchema from "../schemas/realEstateSchemas";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post("/", verifyIfTokenIsValidMiddleware, ifIsAdminMiddleware,verifyBodyMiddleware(createRealEstateSchema), insertRealEstateController);

realEstateRoutes.get("/", showRealEstateController);
  