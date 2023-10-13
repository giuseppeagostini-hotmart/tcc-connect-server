import { model, Schema, Document } from 'mongoose';
import { Invites } from '@/interfaces/invites.interface';

const invitesSchema: Schema = new Schema(
  {
    receiver: {
      type: Object,
      require: true,
    },
    sender: {
      type: Object,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  { collection: 'invites' },
);

const invitesModel = model<Invites & Document>('Invites', invitesSchema);

export default invitesModel;
