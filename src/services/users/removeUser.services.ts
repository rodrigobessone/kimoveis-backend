import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/appError";

export const removeUserQuery = async (id: number) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const deletedUser = await userRepository.findOne({
      where: { id },
    });
    if(!deletedUser){
      throw new AppError("User not found", 404);
    }
    await userRepository.softRemove(deletedUser);  
  };