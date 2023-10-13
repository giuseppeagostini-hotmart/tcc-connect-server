import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@/middlewares/auth.middleware';
import InvitesController from '@/controllers/invites.controller';

class InvitesRoute implements Routes {
  public path = '/invites';
  public router = Router();
  public invitesController = new InvitesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.invitesController.getAllInvites);
    this.router.get(`${this.path}/:id`, authMiddleware, this.invitesController.getInviteById);
    this.router.post(`${this.path}/create`, authMiddleware, this.invitesController.createInvite);
  }
}

export default InvitesRoute;
