import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const verifyBodyMiddleware = (schema: ZodTypeAny) => {
    return async (req: Request, res: Response, next: NextFunction) => {
   
        req.body = schema.parse(req.body);

        next();
    };
  };
  
