import { Request, Response, Router } from "express";
import userService from "../services/user.service";

const userController = Router();

userController.get("/", async (req: Request, res: Response): Promise<Response> => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
})

export default userController;