import { Request, Response } from "express";
import { TscheduleReq } from "../../interfaces/schedule.interface";
import { insertScheduleQuery } from "../../services/schedule/insertSchedule.services";

export const insertScheduleController = async (
    req: Request,
    res: Response
  ) => {

    let userId: number = parseInt(res.locals.decoded.sub);
  
    const body: TscheduleReq = req.body;

    await insertScheduleQuery(body,userId);

    return res.status(201).json({message: 'Schedule created'});
  };