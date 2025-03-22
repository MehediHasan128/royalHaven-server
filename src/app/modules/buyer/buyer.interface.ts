import { Types } from "mongoose"
import { TAddress, TUserName } from "../../global/interface";

export type TBuyer = {
    id: string;
    userId: Types.ObjectId;
    userName: TUserName;
    email: string;
    profileImage: string;
    gender?: 'male' | 'female';
    dateOfBirth?: Date;
    contactNumber: string;
    address: TAddress;
}