import { AppDataSource } from "../../data-source";
import Category from "../../entities/Category.entities";

export const showCategorieRealEstateQuery = async (
    id: number
  ) => {

    const categoryRepository = AppDataSource.getRepository(Category);

    const category = await categoryRepository.findOne({
      where: { id: id },
      relations: {
        realEstate: true
      }
    });
    
    
    return category
  };

  