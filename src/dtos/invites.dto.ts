import { User } from '@/interfaces/users.interface';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

export class CreateInvitesDto {
  @IsNotEmpty()
  @IsNotEmptyObject()
  public sender: Partial<User>;

  @IsNotEmpty()
  @IsNotEmptyObject()
  public receiver: Partial<User>;

  public status: 'pending' | 'decline' | 'accepted';
}
