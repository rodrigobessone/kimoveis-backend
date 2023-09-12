import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";
import { Category } from "../entities";

export async function verifyIdCategoryMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const id: number = parseInt(req.params.id);

  const category: Category | null = await categoryRepository.findOne({
    where: { id: id },
  });

  if (category) {
    throw new AppError("Category not found", 404);
  } 
  return next(); 
}
