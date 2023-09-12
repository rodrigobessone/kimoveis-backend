import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Category from "../../entities/Category.entities";
import { AppError } from "../../errors/appError";
import RealEstate from "../../entities/RealEstate.entities";

export const showCategorieRealEstateQuery = async (
    id: number
  ): Promise<Category> => {
    const categoryRepository = AppDataSource.getRepository(Category);
    const category = await categoryRepository.findOne({
      where: { id: id },
    });
    
        if (!category) {
    throw new AppError("Category not found", 404);
        }
    
        const realEstateRepository = AppDataSource.getRepository(RealEstate);
        const realEstates = await realEstateRepository.find({
          where: { category },
        });
        return category
  };

  