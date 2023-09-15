import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int().positive(),
  userId: z.number().int().positive(),
});

export const scheduleSchemasReq = scheduleSchema.omit({
  id: true,
  userId: true,
});



