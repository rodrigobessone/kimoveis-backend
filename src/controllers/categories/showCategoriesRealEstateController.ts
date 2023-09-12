import { Request, Response } from "express";
import { showCategorieRealEstateQuery } from "../../services/categories/showCategorieRealEstate.services";
import { Category } from "../../entities";

export const showCategoriesRealEstateController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const id: number = parseInt(req.params.id);
    const listCategoryRealEstate: Category = await showCategorieRealEstateQuery(
      id
    );
    return res.status(200).json(listCategoryRealEstate);
  };