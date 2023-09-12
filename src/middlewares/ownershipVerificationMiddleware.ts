import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/appError";

export const validateUserToUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  const userId = Number(req.params.id);
  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }
  try {
    const bearerToken = token.split("Bearer ")[1];

    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new AppError("Secret key not configured", 500);
    }
    const decodedToken: any = jwt.verify(bearerToken, secretKey);

    const userRepository = await AppDataSource.getRepository(User);

    const existingUser = await userRepository.findOne({
      where: { id: userId },
    });
    if (!existingUser) {
      throw new AppError("User not found", 404);
    }
    if (!decodedToken.admin && decodedToken.sub !== String(userId)) {
      throw new AppError("Insufficient permission", 403);
    }

    return next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      if (
        error.message === "invalid signature" ||
        error.message === "jwt malformed"
      ) {
        throw new AppError(error.message, 401);
      }
    }

   return next(error);
  }
};