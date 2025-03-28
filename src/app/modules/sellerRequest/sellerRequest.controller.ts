import { catchAsync } from "../../utils/catchAsync";
import { sendRes } from "../../utils/sendResponce";
import { SellerReqServices } from "./sellerRequest.services";

const createSeller = catchAsync(async(req, res) => {
    console.log(req.body);

    const data = await SellerReqServices.createSellerReqIntoDB(req.body);

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'Your information is under review!',
        data: data
    })

});


const getAllSellerReq = catchAsync(async(req, res) => {

    const data = await SellerReqServices.getAllSellerRequestFromDB();

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'Retrive all seller request!',
        data: data
    })

});


export const SellerReqController = {
    createSeller,
    getAllSellerReq
}