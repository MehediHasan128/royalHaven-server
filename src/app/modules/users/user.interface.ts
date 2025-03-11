export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TUser = {
  id: string;
  userName: TUserName;
  email: string;
  password: string;
  profileImage: string;
  phoneNumber: string;
  gender?: 'male' | 'female';
  role: 'buyer' | 'seller' | 'agent' | 'admin';
  status: 'active' | 'pending' | 'suspended' | 'banned' | 'deleted';
  passwordChangeAt?: Date;
  isDeleted: boolean;
};
