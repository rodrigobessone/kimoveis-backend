import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export const verifyNotAdminUpdateMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {

    const { decoded } = res.locals;

    const id = parseInt(req.params.id);
  
    if (decoded.admin == true || parseInt(decoded.sub) === id) {
      throw new AppError("Insufficient permission", 403);
    }

    return next();
  };