import { Request, Response } from "express";
import { Tcategories, TcategoriesReq } from "../../interfaces/categories.interface";
import { insertCategoryQuery } from "../../services/categories/insertCategory.services";

export const insertCategoriesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userData: TcategoriesReq = req.body;
    const newUser: Tcategories = await insertCategoryQuery(userData);
    return res.status(201).json(newUser);
  };