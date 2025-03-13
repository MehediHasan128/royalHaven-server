import { catchAsync } from "../../utils/catchAsync"
import { sendRes } from "../../utils/sendResponce";
import { UserServices } from "./user.services";

const createUser = catchAsync(async(req, res) => {

    const {password, buyer: buyerData} = req.body;

    const data = await UserServices.createUserIntoDB(password, buyerData);

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'Successfully user is created as a buyer!',
        data: data
    })

})


export const UserController = {
    createUser
}