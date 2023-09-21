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
    firstTime: {
      type: Boolean,
      require: true,
    },
    isProfessorAvaliable: {
      type: Boolean,
      require: false,
    },
    name: {
      type: String,
      require: false,
    },
    institution: {
      type: String,
      require: false,
    },
    campus: {
      type: String,
      require: false,
    },
    interests: {
      type: Array,
      require: false,
    },
  },
  { collection: 'users' },
);

const userModel = model<User & Document>('User', userSchema);

export default userModel;
