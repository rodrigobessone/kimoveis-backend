import { Request, Response } from "express";
import { TuserReadSchema } from "../../interfaces/user.interface";
import { showUserQuery } from "../../services/users/showUser.services";
import { User } from "../../entities";
import { UserResponseSchema } from "../../schemas/userSchemas";

export const showUserController = async (
    _req: Request,
    res: Response
  ) => {
    
    const listUser = await showUserQuery();
    
    const responseUser: TuserReadSchema[] = listUser.map((user: User) => {

      const parsedUser = UserResponseSchema.parse(user)

      return parsedUser
    })
    
    return res.status(200).json(responseUser)
  };