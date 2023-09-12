import { Request, Response } from "express";
import { updateUserQuery } from "../../services/users/updateUser.services";
import { UserResponseSchema } from "../../schemas/userSchemas";

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);
  const { name, email } = req.body;
  const updatedUser = await updateUserQuery(
    userId,
    name,
    email
  );
  const serializedUser = UserResponseSchema.parse(updatedUser);
  return res.json(serializedUser);
};
