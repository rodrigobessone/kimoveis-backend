import { Repository } from "typeorm";
import { TuserReq, TuserRes } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { createUserSchemaRes } from "../../schemas/userSchemas";
import User from "../../entities/Users.entities";

export const createUserQuery = async (
    userData: TuserReq
  ): Promise<TuserRes> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user: User = userRepository.create(userData);
    await userRepository.save(user);
    const returnUser: TuserRes = createUserSchemaRes.parse(user);
    return returnUser;
  };