import { Repository } from "typeorm";
import { TuserRes } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { allUserSchemaResGet } from "../../schemas/userSchemas";
import { User } from "../../entities";

export const showUserQuery = async (): Promise<TuserRes[]> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    const usersResponse = allUserSchemaResGet.parse(users);
  
    return usersResponse;
  };