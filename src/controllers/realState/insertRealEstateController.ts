import { Request, Response } from "express";
import { insertRealEstateQuery } from "../../services/realEstate/insertRealEstate.services";

export const insertRealEstateController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const realEstateData = req.body;
    const newRealEstate = await insertRealEstateQuery(realEstateData);
    return res.status(201).json(newRealEstate);
  };