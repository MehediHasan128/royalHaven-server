import AppError from "../../error/AppError";
import { User } from "../users/user.model"
import { TUserLogin } from "./auth.interface"
import httpStatus from 'http-status-codes';
import { convertHashPassToPlaiText } from "./auth.utils";

const signInUser = async(payload: TUserLogin) => {

    // Check the user is exist on database
    const isUserExists = await User.findOne({email: payload?.userEmail});
    if(!isUserExists) {
        throw new AppError(httpStatus.NOT_FOUND, 'User is not found!');
    };

    // Check the user is delete or not
    const isUserDelete = isUserExists?.isDeleted;
    if(isUserDelete === true) {
        throw new AppError(httpStatus.FORBIDDEN, 'User is already deleted!');
    };

    // Check the user status
    const userStstus = isUserExists?.status;
    if(userStstus === 'banned') {
        throw new AppError(httpStatus.FORBIDDEN, 'Your account has been banned. Contact support for assistance.');
    };

    // Check the user password
    const isPasswordMatched =  await convertHashPassToPlaiText(payload?.userPassword, isUserExists?.password);
    if(!isPasswordMatched) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Incorrect Password!');
    }

}


export const AuthServices = {
    signInUser
}