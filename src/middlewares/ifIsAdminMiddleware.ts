import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export const ifIsAdminMiddleware = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { decoded } = res.locals;

  if (decoded && decoded.admin === true) {
    return next(); 
  }

  throw new AppError("Insufficient permission", 403);
};
