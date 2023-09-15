import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

export const showUserQuery = async () => {
  
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    
    const users = await userRepository.find();
  
    return users
  };