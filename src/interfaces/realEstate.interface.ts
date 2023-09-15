import { z } from "zod";
import createRealEstateSchema from "../schemas/realEstateSchemas";

export type TrealEstateReq = z.infer<typeof createRealEstateSchema>;

