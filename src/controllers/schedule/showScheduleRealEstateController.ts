import { Request, Response } from "express";
import { showScheduleRealEstateQuery } from "../../services/schedule/showScheduleRealEstate.services";
import RealEstate from "../../entities/RealEstate.entities";

export const showScheduleRealEstateController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const id: number = parseInt(req.params.id);
    const list: RealEstate = await showScheduleRealEstateQuery(id);
    return res.status(200).json(list);
  };