import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";
import Schedule from "../entities/Schedule.entities";

export async function userScheduleDateHourMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { date, hour } = req.body;
    let userId = res.locals.decoded.sub;
  
    const ifScheduleExists = await AppDataSource.getRepository(Schedule)
      .createQueryBuilder("schedule")
      .where("schedule.userId = :userId", { userId })
      .andWhere("schedule.date = :date", { date })
      .andWhere("schedule.hour = :hour", { hour })
      .getOne();
      if (!ifScheduleExists) {
        next();
      } else {
        throw new AppError(
          "Schedule to this real estate at this date and time already exists",
          409
        );
      }
  }