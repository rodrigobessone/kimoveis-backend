import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";

export const verifyUserByEmail = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const verifyUserExists = await userRepository.findOne({
    where: { email },
  });

  if (verifyUserExists) {
    throw new AppError("Email already exists", 409);
  }

 return next();
 
};
