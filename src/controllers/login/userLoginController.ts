import { Request, Response } from "express";
import { TloginReq, TtokenLoginRes } from "../../interfaces/login.interface";
import { insertLoginQuery } from "../../services/login/insertLogin.services";

export const userLoginController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const loginData: TloginReq = req.body;
    const token: TtokenLoginRes = await insertLoginQuery(loginData);
    return res.status(200).json(token);
  };