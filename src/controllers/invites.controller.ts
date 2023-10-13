import { NextFunction, Request, Response } from 'express';
import InvitesService from '@/services/invites.service';
import { Invites } from '@/interfaces/invites.interface';
import { CreateInvitesDto } from '@/dtos/invites.dto';

class InvitesController {
  public invitesService = new InvitesService();

  public getAllInvites = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const invites: Invites[] = await this.invitesService.findAllInvites();

      res.status(200).json({ data: invites, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getInviteById = async (req: Request, res: Response, next: NextFunction) => {
    const senderParamId: string = req.params.id;
    try {
      const invites: Invites[] = await this.invitesService.findInviteById(senderParamId);

      if (invites.length === 0) {
        res.status(201).json({ data: invites, message: 'noContent' });
      } else {
        res.status(200).json({ data: invites, message: 'findAll' });
      }
    } catch (error) {
      next(error);
    }
  };

  public createInvite = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const inviteData: CreateInvitesDto = req.body;
      const createInviteData: Invites = await this.invitesService.createInvite(inviteData);

      res.status(201).json({ data: createInviteData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default InvitesController;
