import { TSeller } from "../seller/seller.interface"
import { SellerRequest } from "./sellerRequest.model";

const createSellerReqIntoDB = async(payload: TSeller) => {
    const data = await SellerRequest.create(payload);
    return data;
}


export const SellerReqServices = {
    createSellerReqIntoDB
}