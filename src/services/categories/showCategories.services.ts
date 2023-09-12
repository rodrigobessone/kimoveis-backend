import { Repository } from "typeorm";
import { Tcategories } from "../../interfaces/categories.interface";
import { AppDataSource } from "../../data-source";
import { getCategoriesSchema } from "../../schemas/categoriesSchemas";
import Category from "../../entities/Category.entities";

export const showCategoriesQuery = async (): Promise<Tcategories[]> => {
    const categoryRepository: Repository<Category> =
      AppDataSource.getRepository(Category);
    const category = await categoryRepository.find();
    const categoryResponse: Tcategories[] = getCategoriesSchema.parse(category);
  
    return categoryResponse;
  };