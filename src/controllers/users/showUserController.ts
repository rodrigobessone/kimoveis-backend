import { Request, Response } from "express";
import { TuserRes } from "../../interfaces/user.interface";
import { showUserQuery } from "../../services/users/showUser.services";

export const showUserController = async (
    _req: Request,
    res: Response
  ): Promise<Response> => {
    const listUser: TuserRes[] = await showUserQuery();
    return res.status(200).json(listUser);
  };