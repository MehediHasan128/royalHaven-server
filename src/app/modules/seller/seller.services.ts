import { Seller } from "./seller.model";

const getSellerInformationFromDB = async (uid: string) => {
    const data = await Seller.findOne({id: uid});
    return data;
};



export const SellerServices = {
    getSellerInformationFromDB
}