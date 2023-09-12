import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import RealEstate from "../../entities/RealEstate.entities";


export const showRealEstateQuery = async (): Promise<RealEstate[]> => {
    const realEstateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);
    const RealEstateList: RealEstate[] = await realEstateRepository.find({
      relations: {
        address: true,
      },
    });
  
    return RealEstateList;
  };