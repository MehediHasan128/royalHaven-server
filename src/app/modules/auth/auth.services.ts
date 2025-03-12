import { User } from "../users/user.model"
import { TUserLogin } from "./auth.interface"

const signInUser = async(payload: TUserLogin) => {

    const isUserExists = await User.findOne({email: payload?.userEmail});
    

}


export const AuthServices = {
    signInUser
}