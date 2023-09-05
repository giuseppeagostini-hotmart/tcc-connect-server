import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isProfessor: {
      type: Boolean,
      require: true,
    },
    first_time: {
      type: Boolean,
      require: true,
    },
  },
  { collection: 'users' },
);

const userModel = model<User & Document>('User', userSchema);

export default userModel;
