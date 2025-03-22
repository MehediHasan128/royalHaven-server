import { TSeller } from "../seller/seller.interface"
import { Seller } from "../seller/seller.model"

const createSellerReqIntoDB = async(payload: TSeller) => {
    const data = await Seller.create(payload);
    return data;
}


export const SellerReqServices = {
    createSellerReqIntoDB
}