import { z } from "zod";
import { scheduleSchema, scheduleSchemasReq, scheduleSchemasRes } from "../schemas/schedulesSchemas";

export type TscheduleReq = z.infer<typeof scheduleSchemasReq>;
export type TscheduleRes = z.infer<typeof scheduleSchemasRes>;
export type Tschedule = z.infer<typeof scheduleSchema>;
export interface TscheduleCreateRes {
  message: string;
}