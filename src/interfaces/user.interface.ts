import { z } from "zod";
import { UserResponseSchema, createUserSchema, createUserSchemaReq, createUserSchemaRes } from "../schemas/userSchemas";
import { DeepPartial } from "typeorm";

export type TuserReq = z.infer<typeof createUserSchemaReq>;
export type TuserRes = z.infer<typeof createUserSchemaRes>;
export type Tuser = z.infer<typeof createUserSchema>;
export type TuserUpdateReq = DeepPartial<TuserReq>;

type Infer<T> = T extends z.ZodType<infer R> ? R : never;

export type TuserReadSchema = Infer<typeof UserResponseSchema>