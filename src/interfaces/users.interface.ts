export interface User {
  _id: string;
  email: string;
  password: string;
  isProfessor: boolean;
  firstTime: boolean;
  isProfessorAvaliable?: boolean;
}
