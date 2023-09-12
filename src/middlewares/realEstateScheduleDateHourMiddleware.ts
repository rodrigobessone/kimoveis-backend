import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";
import { Schedule } from "../entities";

export async function realEstateScheduleDateHourMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {
    const { realEstateId, date, hour } = req.body;
  
    const ifScheduleExists = await AppDataSource.getRepository(Schedule)
      .createQueryBuilder("schedule")
      .where("schedule.realEstateId = :realEstateId", { realEstateId })
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