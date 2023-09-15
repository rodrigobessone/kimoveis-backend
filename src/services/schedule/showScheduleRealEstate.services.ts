import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors/appError";

export const showScheduleRealEstateQuery = async (
    realEstateId: number
  ) => {
    const realEstateRepository =
      AppDataSource.getRepository(RealEstate);
  
    const realEstate = await realEstateRepository.findOne({ 
        where: {
          id: realEstateId
        },
        relations: {
          schedules: {user: true},
          address: true,
          category: true,
        }
      })
      
      if(!realEstate) {
        throw new AppError("RealEstate not found", 404);
      }
    
      return realEstate
    }
  
