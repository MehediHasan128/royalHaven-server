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

});




const createSeller = catchAsync(async(req, res) => {
    

    const data = await UserServices.createSellerIntoDB(req.body);

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'Successfully user is created as a buyer!',
        data: data
    })

})



const uploadUserImage = catchAsync(async(req, res) => {

    const data = await UserServices.uploadUserImageIntoDB(req.file, req.params.userId);

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'Image upload successfully!',
        data: data
    });

})



const getallUser = catchAsync(async(req, res) => {

    const data = await UserServices.getAllUsersFromDB();

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'Successfully retive all users!',
        data: data
    });

})


export const UserController = {
    createUser,
    createSeller,
    uploadUserImage,
    getallUser
}