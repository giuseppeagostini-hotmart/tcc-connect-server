import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';
import userModel from '@models/users.model';
import { logger } from '@/utils/logger';

const extractToken = (token: string) => token.split('Bearer ')[1];

const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    logger.info('HEADER: ', req.header('Authorization'));
    const authToken = req.header('Authorization') ? extractToken(req.header('Authorization')) : null;
    logger.info(authToken);
    if (authToken) {
      const secretKey: string = SECRET_KEY;
      const verificationResponse = (await verify(authToken, secretKey)) as DataStoredInToken;
      logger.info(authToken);
      logger.info('aaaa', verificationResponse);

      const userId = verificationResponse._id;
      const findUser = await userModel.findById(userId);

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
