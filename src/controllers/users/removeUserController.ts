import { Request, Response } from "express";
import { removeUserQuery } from "../../services/users/removeUser.services";

export const removeUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const id: number = parseInt(req.params.id);
    await removeUserQuery(id);
    return res.status(204).end();
  };