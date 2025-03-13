import { Types } from "mongoose"
import { TAddress, TUserName } from "../../global/interface";

export type TBuyer = {
    id: string;
    userId: Types.ObjectId;
    profileImage?: string;
    userName: TUserName;
    email: string;
    gender?: 'male' | 'female' | '';
    dateOfBirth?: Date;
    contactNumber?: string;
    address?: TAddress;
}