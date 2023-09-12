import { Request, Response } from "express";
import { removeUserQuery } from "../../services/users/removeUser.services";
import { User } from "../../entities";

export const removeUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const id: number = parseInt(req.params.id);
    console.log(id)
    await removeUserQuery(id);
    return res.status(204).end();
  };