import { catchAsync } from "../../utils/catchAsync";
import { sendRes } from "../../utils/sendResponce";
import { BuyerServices } from "./buyer.services";



const addBuyerInformation = catchAsync(async(req, res) => {
    

    const data = await BuyerServices.createBuyerInformationIntoDB( req.params.buyerId, req.body);

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'Successfully added the information!',
        data: data
    })

});


const getBuyerInformation = catchAsync(async(req, res) => {
    

    const data = await BuyerServices.getBuyerInformationFromDB(req.params.uid);

    // Send responce
    sendRes(res, {
        success: true,
        statusCode: 200,
        message: 'Successfully got the information!',
        data: data
    })

});


export const BuyerController = {
    addBuyerInformation,
    getBuyerInformation
}