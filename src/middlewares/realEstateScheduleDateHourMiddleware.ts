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
  
    const ifScheduleExists = AppDataSource.getRepository(Schedule)

    const schedule = await ifScheduleExists.findOne({
      where: { hour, date, realEstate: {id: realEstateId}}
    })

    if (schedule) {
      throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    } 

    next();
}
      
