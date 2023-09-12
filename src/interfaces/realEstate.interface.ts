import { z } from "zod";
import { insertRealEstateSchemaCategories, insertRealEstateSchemaReq, insertRealEstateSchemaRes } from "../schemas/realEstateSchemas";

export type TrealEstateReq = z.infer<typeof insertRealEstateSchemaReq>;

export type TrealEstateCategory = z.infer<typeof insertRealEstateSchemaCategories>;

export type TrealEstateRes = z.infer<typeof insertRealEstateSchemaRes>;