import { Request, Response } from "express";
import { UserDto } from "../dto/user/user.dto";
import { AuthService } from "../services/auth";

export class AuthController {
  authService: AuthService = new AuthService();

  signUp = async (req: Request, res: Response) => {
    const data: UserDto = req.body;

    const result = await this.authService.signUp(data);

    if (result == 0) {
      return res.status(409).json({ message: `signup failed` });
    }

    return res.status(201).json({ message: `signup success` });
  };

  login = async (req: Request, res: Response) => {
    const data: UserDto = req.body;

    const result = await this.authService.login(data);

    if (result == 0) {
      return res.status(403).json({ message: `login failed` });
    }

    return res.status(200).json({ message: `login success`, token: result });
  };
}
