import { Request, Response } from "express";
import { createUserQuery } from "../../services/users/createUser.services";

export const insertUserController = async (
    req: Request,
    res: Response
  )=> {
    const userData = req.body;
    const newUser = await createUserQuery(userData);
    return res.status(201).json(newUser);
  };