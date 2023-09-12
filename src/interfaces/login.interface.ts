import { z } from "zod";
import { createLoginSchema, createTokenSchemaRes } from "../schemas/loginSchemas";

export type TloginReq = z.infer<typeof createLoginSchema>;

export type TtokenLoginRes = z.infer<typeof createTokenSchemaRes>;