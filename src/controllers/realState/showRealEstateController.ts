import { Request, Response } from "express";
import { showRealEstateQuery } from "../../services/realEstate/showRealEstate.services";

export const showRealEstateController = async (
    _req: Request,
    res: Response
  ): Promise<Response> => {
    const newRealEstate = await showRealEstateQuery();
    return res.status(200).json(newRealEstate);
  };