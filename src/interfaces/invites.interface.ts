import { User } from './users.interface';

export interface Invites {
  sender: Partial<User>;
  receiver: Partial<User>;
  status: 'pending' | 'decline' | 'accepted';
}
