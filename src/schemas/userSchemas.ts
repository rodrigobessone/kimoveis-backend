import { z } from "zod";

export const createUserSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

export const createUserSchemaRes = createUserSchema.omit({
  password: true,
    createdAt: true,
  updatedAt: true,
  deleteAt: true,

});

export const updateUserSchemaReq = createUserSchema
  .omit({
    id: true,
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
  })
  .partial();
export const allUserSchemaResGet = createUserSchema
  .omit({
    password: true,
  })
  .array();
  
export const createUserSchemaReq = createUserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const UserResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  admin: z.boolean(),
  createdAt: z.date().or(z.string()).nullable(),
  updatedAt: z.date().or(z.string()).nullable(),
  deletedAt: z.date().or(z.string()).nullable(),
});