import { CreateInvitesDto } from '@/dtos/invites.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Invites } from '@/interfaces/invites.interface';
import invitesModel from '@/models/invites.model';

class InvitesService {
  public invites = invitesModel;

  public async findAllInvites(): Promise<Invites[]> {
    const invites: Invites[] = await this.invites.find();
    return invites;
  }

  public async findInviteById(senderInviteId: string): Promise<Invites[]> {
    const invites: Invites[] = await this.invites.find({ 'sender._id': senderInviteId });
    return invites;
  }

  public async createInvite(inviteData: CreateInvitesDto): Promise<Invites> {
    const invites = await this.invites.find({ 'sender._id': inviteData.sender._id });

    const invite = invites.filter(invite => {
      return invite.receiver._id === inviteData.receiver._id;
    });

    if (invite.length !== 0) throw new HttpException(409, 'Voçê já possui um convite cadastrado com esse professor!');

    const createInviteData: Invites = await this.invites.create({ ...inviteData, status: 'pending' });

    return createInviteData;
  }
}

export default InvitesService;
