import { TSeller } from "../seller/seller.interface"
import { SellerRequest } from "./sellerRequest.model";

const createSellerReqIntoDB = async(payload: TSeller) => {
    const data = await SellerRequest.create(payload);
    return data;
};


const getAllSellerRequestFromDB = async() => {
    const data = await SellerRequest.find().select('-_id');
    return data;
}


export const SellerReqServices = {
    createSellerReqIntoDB,
    getAllSellerRequestFromDB
}