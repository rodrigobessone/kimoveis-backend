import { Repository } from "typeorm";
import {
  Tcategories,
  TcategoriesReq,
} from "../../interfaces/categories.interface";
import { AppDataSource } from "../../data-source";
import { insertCategoriesSchema } from "../../schemas/categoriesSchemas";
import Category from "../../entities/Category.entities";
import { AppError } from "../../errors/appError";

export const insertCategoryQuery = async (
  userData: TcategoriesReq
): Promise<Tcategories> => {
  const {name} = userData
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

       const existingCategory = await categoriesRepository.findOne({
         where: { name },
       });
       if (existingCategory) {
throw new AppError("Category already exists", 409);
       }
    const category = categoriesRepository.create({ name });
    await categoriesRepository.save(category);
    return category
};
