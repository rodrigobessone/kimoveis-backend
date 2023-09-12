import { Router } from "express";
import { ifIsAdminMiddleware } from "../middlewares/ifIsAdminMiddleware";
import { verifyIfTokenIsValidMiddleware } from "../middlewares/verifyIftokenIsValidMiddleware";
import { verifyNameCategoryMiddleware } from "../middlewares/verifyNameCategoryMiddleware";
import { insertCategoriesController } from "../controllers/categories/insertCategoriesController";
import { showCategoriesController } from "../controllers/categories/showCategoriesController";
import { verifyIdCategoryMiddleware } from "../middlewares/verifyIdCategoryMiddleware";
import { showCategoriesRealEstateController } from "../controllers/categories/showCategoriesRealEstateController";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("", authenticationMiddleware, verifyIfTokenIsValidMiddleware, ifIsAdminMiddleware,
verifyNameCategoryMiddleware, insertCategoriesController);

categoriesRoutes.get("", showCategoriesController);

categoriesRoutes.get("/:id/realEstate", verifyIdCategoryMiddleware, showCategoriesRealEstateController);

