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

    let { sub } = res.locals.decoded

    sub = Number(sub)
  
    const ifScheduleExists = AppDataSource.getRepository(Schedule)
    const schedule = await ifScheduleExists.findOne({
      where: {
        hour, user: sub, date
      }
    })

    if (schedule) {
        throw new AppError("User schedule to this real estate at this date and time already exists",
          409
        );
      }
    
      next();
  }