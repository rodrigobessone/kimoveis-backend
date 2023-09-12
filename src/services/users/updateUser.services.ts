import { Repository } from "typeorm";
import { TuserRes, TuserUpdateReq } from "../../interfaces/user.interface";
import { createUserSchemaRes } from "../../schemas/userSchemas";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/appError";

export const updateUserQuery = async (
  userId: number,
  name?: string,
  email?: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const userToUpdate = await userRepository.findOne({
    where: { id: userId },
  });
  if (!userToUpdate) {
    throw new AppError("User not found.", 404);
  }

  if (name) userToUpdate.name = name;
  if (email) userToUpdate.email = email;

  const updatedUser = await userRepository.save(userToUpdate);
  return updatedUser;
};