import { catchAsync } from "../../utils/catchAsync"
import { sendRes } from "../../utils/sendResponce";
import { AuthServices } from "./auth.services"

const UserSignIn = catchAsync(async(req, res) => {

    const data = await AuthServices.signInUser(req.body);
    console.log(req.body);

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'User sign on successfully',
        data: data
    })

})


export const AuthController = {
    UserSignIn
}