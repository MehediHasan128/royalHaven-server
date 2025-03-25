import { Types } from "mongoose"
import { TAddress, TUserName } from "../../global/interface";

export type TIdentityNumber = {
    passportNumber?: string;
    drivingLicence?: string;
    nationalIdCard?: string;
}

export type TSeller = {
    id: string;
    userId: Types.ObjectId;
    userName: TUserName;
    profileUniqueUserName: string;
    email: string;
    profileImage: string;
    gender: 'male' | 'female';
    dateOfBirth: string;
    contactNumber: string;
    address: TAddress;
    companyName?: string;
    websiteLink?: string;
    licenceNumber?: string;
    identityNumber: string;
}