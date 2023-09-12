import { Request, Response } from "express";
import { TuserReq, TuserRes } from "../../interfaces/user.interface";
import { createUserQuery } from "../../services/users/createUser.services";

export const insertUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userData: TuserReq = req.body;
    const newUser: TuserRes = await createUserQuery(userData);
    return res.status(201).json(newUser);
  };