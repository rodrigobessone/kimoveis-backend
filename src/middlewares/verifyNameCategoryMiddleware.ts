import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { AppError } from "../errors/appError";
import Category from "../entities/Category.entities";


export async function verifyNameCategoryMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {
    const categoryRepository: Repository<Category> =
      AppDataSource.getRepository(Category);
    const bodyName: string | undefined = req.body.name;
    if (bodyName) {
      const category: Category | null = await categoryRepository.findOne({
        where: { name: bodyName },
      });
      if (category) {
        throw new AppError("Category already exists", 409);
      }
    }
  
    next();
  }