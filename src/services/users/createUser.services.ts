import { AppDataSource } from "../../data-source";
import { UserResponseSchema } from "../../schemas/userSchemas";
import User from "../../entities/Users.entities";
import bcrypt from 'bcrypt'

export const createUserQuery = async (
    userData: User
  ) => {

    const userRepository = AppDataSource.getRepository(User);

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user= userRepository.create({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      admin: userData.admin
  });

    const newUser = await userRepository.save(user);

    const returnUser = UserResponseSchema.parse({
      id: newUser.id,
      name: newUser.name,
      email:newUser.email,
      admin: newUser.admin,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
      deletedAt: newUser.deletedAt,

  });
    
    return returnUser;
  };