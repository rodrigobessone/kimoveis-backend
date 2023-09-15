import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";

export const authenticationMiddleware = async (req: Request,res: Response,next: NextFunction) => {
    
  const token = req.headers.authorization;
  
    if (!token) {
      throw new AppError("Missing bearer token", 401);
    }
  
      const bearerToken = token.split("Bearer ")[1];

      const secretKey = process.env.SECRET_KEY;
  
      if (!secretKey) {
        throw new AppError("Secret key not configured", 500);
      }
  
      const decodedToken: any = jwt.verify(bearerToken, secretKey);
  
      const userContext = {
        isAdmin: decodedToken.admin,
        userId: decodedToken.sub,
      };
  
      res.locals.userContext = userContext;
  
      return next();
} 
  
  