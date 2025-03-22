import { TBuyer } from './buyer.interface';
import { Buyer } from './buyer.model';

const createBuyerInformationIntoDB = async (
  buyerId: string,
  payload: Partial<TBuyer>,
) => {
  const data = await Buyer.findOneAndUpdate({ id: buyerId }, payload, {
    new: true,
  });
  return data;
};

const getBuyerInformationFromDB = async (uid: string) => {
    const data = await Buyer.findOne({id: uid});
    return data;
};

export const BuyerServices = {
  createBuyerInformationIntoDB,
  getBuyerInformationFromDB,
};
