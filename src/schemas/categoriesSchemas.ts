import { z } from "zod";

export const insertCategoriesSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});
export const insertCategoriesSchemaReq = insertCategoriesSchema.omit({
  id: true,
});
export const getCategoriesSchema = z
  .object({
    id: z.number(),
    name: z.string().max(45),
  })
  .array();
