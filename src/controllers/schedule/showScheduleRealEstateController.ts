import { Request, Response } from "express";
import { showScheduleRealEstateQuery } from "../../services/schedule/showScheduleRealEstate.services";

export const showScheduleRealEstateController = async (
    req: Request,
    res: Response
  ) => {

    const id: number = parseInt(req.params.id);

    const list = await showScheduleRealEstateQuery(id);

    return res.status(200).json(list);
  };