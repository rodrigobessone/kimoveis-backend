import { Request, Response } from "express";
import { showCategorieRealEstateQuery } from "../../services/categories/showCategorieRealEstate.services";

export const showCategoriesRealEstateController = async (
    req: Request,
    res: Response
  ) => {

    const id: number = parseInt(req.params.id);

    const listCategoryRealEstate  = await showCategorieRealEstateQuery(
      id
    );

    return res.status(200).json(listCategoryRealEstate);
  };