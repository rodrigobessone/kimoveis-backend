import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export async function checkHourMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {
    const hour: number = parseInt(req.body.hour);
    if (!(hour >= 8 && hour <= 18)) {
      throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
    } else {
      next();
    }
  }

