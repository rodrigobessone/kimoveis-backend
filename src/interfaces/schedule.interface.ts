import { z } from "zod";
import { scheduleSchema } from "../schemas/schedulesSchemas";

export type TscheduleReq = z.infer<typeof scheduleSchema>;
export type Tschedule = z.infer<typeof scheduleSchema>;
