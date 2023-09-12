import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";

export const verifyIfTokenIsValidMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    let token = req.headers.authorization;
    if (!token) {
      throw new AppError("Missing bearer token", 401);
    }
    
    token = token.split(" ")[1];
    
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY!) as any; 
      res.locals = {
        decoded,
        ...res.locals,
      };
      return next();
    } catch (err: any) {
      throw new AppError(err.message, 401);
    }
    
    
  };