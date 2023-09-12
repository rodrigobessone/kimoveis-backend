import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import moment from "moment";

export async function ifDateAvailableMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {
    const date = req.body.date;
    const data = moment(date, "YYYY-DD-MM");
    if (!(data.isoWeekday() >= 1 && data.isoWeekday() <= 5)) {
      throw new AppError("Invalid date, work days are monday to friday", 400);
    } else {
      next();
    }
  }