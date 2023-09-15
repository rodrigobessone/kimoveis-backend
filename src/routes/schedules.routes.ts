import { Router } from "express";
import { ifIsAdminMiddleware } from "../middlewares/ifIsAdminMiddleware";
import { verifyBodyMiddleware } from "../middlewares/verifyBodyMiddleware";
import { verifyIfTokenIsValidMiddleware } from "../middlewares/verifyIftokenIsValidMiddleware";
import { scheduleSchemasReq } from "../schemas/schedulesSchemas";
import { idRealEstateBodyMiddleware } from "../middlewares/idRealEstateBodyMiddleware";
import { realEstateScheduleDateHourMiddleware } from "../middlewares/realEstateScheduleDateHourMiddleware";
import { checkHourMiddleware } from "../middlewares/checkHourMiddleware";
import { insertScheduleController } from "../controllers/schedule/insertScheduleController";
import { showScheduleRealEstateController } from "../controllers/schedule/showScheduleRealEstateController";
import { userScheduleDateHourMiddleware } from "../middlewares/userScheduleDateHourMiddleware";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post("", verifyIfTokenIsValidMiddleware, verifyBodyMiddleware(scheduleSchemasReq), idRealEstateBodyMiddleware,realEstateScheduleDateHourMiddleware,
  userScheduleDateHourMiddleware,checkHourMiddleware, insertScheduleController
);

schedulesRoutes.get("/realEstate/:id", verifyIfTokenIsValidMiddleware, ifIsAdminMiddleware, showScheduleRealEstateController
);

