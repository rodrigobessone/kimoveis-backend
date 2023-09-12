import { Request, Response } from "express";
import { Tcategories } from "../../interfaces/categories.interface";
import { showCategoriesQuery } from "../../services/categories/showCategories.services";

export const showCategoriesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const listCategory: Tcategories[] = await showCategoriesQuery();
    return res.status(200).json(listCategory);
  };