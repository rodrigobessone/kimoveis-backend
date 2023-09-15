import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";
import { User } from "../entities";

export async function verifyIdMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const id: number = parseInt(req.params.id);

  const user: User | null = await userRepository.findOne({
    where: { id: id },
  });

  if (user || (res.locals.decoded && res.locals.decoded.admin === true)) {
    return next();
  }

  throw new AppError("User not found", 404);
}
