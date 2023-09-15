import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors/appError";
import { Tschedule } from "../../interfaces/schedule.interface";

export const insertScheduleQuery = async (
    data: Tschedule,
    userId: number
  ) => {
    const parseData = new Date(data.date).getDay()
    
    if ((parseData === 0) || parseData === 6) {
      throw new AppError("Invalid date, work days are monday to friday", 400);
    } 

    const scheduleRepository =
      AppDataSource.getRepository(Schedule);
  
      
      const realEstateRepository =
      AppDataSource.getRepository(RealEstate);
      
      let realEstate = await realEstateRepository.findOne({
        where: { id: data.realEstateId },
      });
      
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: userId },
    });

  
    await scheduleRepository.save({...data, realEstate: realEstate!, user: user!});
  
   
  };