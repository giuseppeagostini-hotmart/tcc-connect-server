import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { tokenData, findUser } = await this.authService.login(userData);

      res.status(200).json({ data: { tokenData, findUser }, message: 'login' });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const { findUser } = await this.authService.logout(userData);

      res.status(200).json({ data: findUser, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };

  public isLogged = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const { findUser } = await this.authService.logout(userData);

      res.status(200).json({ data: findUser, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
