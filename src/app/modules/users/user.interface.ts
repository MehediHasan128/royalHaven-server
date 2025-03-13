import { TUserName } from "../../global/interface";

export type TUser = {
  id: string;
  userName: TUserName;
  email: string;
  password: string;
  profileImage?: string;
  role: 'buyer' | 'seller' | 'agent' | 'admin';
  status: 'active' | 'pending' | 'suspended' | 'banned';
  passwordChangeAt?: Date;
  isDeleted: boolean;
};
