import { Repository } from "typeorm";
import { TloginReq, TtokenLoginRes } from "../../interfaces/login.interface";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../../entities/Users.entities";

export const insertLoginQuery = async (
  loginData: TloginReq
): Promise<TtokenLoginRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });
  
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = loginData.password === user.password;
  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: user.admin,
    },
    String(process.env.SECRET_KEY!),
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return { token };
};