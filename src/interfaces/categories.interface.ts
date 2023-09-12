import { z } from "zod";
import { insertCategoriesSchema, insertCategoriesSchemaReq } from "../schemas/categoriesSchemas";

export type TcategoriesReq = z.infer<typeof insertCategoriesSchemaReq>;
export type Tcategories = z.infer<typeof insertCategoriesSchema>;