import { TSeller } from "../seller/seller.interface"
import { SellerRequest } from "./sellerRequest.model";

const createSellerReqIntoDB = async(payload: TSeller) => {
    const data = await SellerRequest.create(payload);
    return data;
};


const getAllSellerRequestFromDB = async() => {
    console.log(7);
}


export const SellerReqServices = {
    createSellerReqIntoDB,
    getAllSellerRequestFromDB
}