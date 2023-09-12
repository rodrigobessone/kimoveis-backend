import { z } from "zod";

const createRealEstateSchema = z.object({
  value: z.union([z.string(), z.number()]).default(0),
  size: z.number().min(1),
  address: z.object({
    street: z.string().max(45).min(1),
    zipCode: z.string().max(8).min(1),
    number: z.number().int().min(1),
    city: z.string().max(20).min(1),
    state: z.string().max(2).min(1),
  }),
  categoryId: z.number().int(),
});

export default createRealEstateSchema;
