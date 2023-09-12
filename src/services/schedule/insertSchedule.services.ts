import { Repository } from "typeorm";
import { TscheduleCreateRes, TscheduleReq } from "../../interfaces/schedule.interface";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { RealEstate, Schedule, User } from "../../entities";

export const insertScheduleQuery = async (
    data: TscheduleReq,
    userId: number
  ): Promise<TscheduleCreateRes> => {
    const scheduleRepository: Repository<Schedule> =
      AppDataSource.getRepository(Schedule);
  
    const realEstateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);
  
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    let realEstate: RealEstate | null = await realEstateRepository.findOne({
      where: { id: data.realEstateId },
    });
  
    const user: User | null = await userRepository.findOne({
      where: { id: userId },
    });
    if (!realEstate) {
      throw new AppError("RealEstate not found", 404);
    }
  
    const obj = {
      ...data,
      realEstate: realEstate,
      user: user!,
    };
  
    const schedule: Schedule = scheduleRepository.create(obj);
  
    await scheduleRepository.save(schedule);
  
    return {
      message: "Schedule created",
    };
  };