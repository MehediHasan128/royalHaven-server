import { User } from './user.model';

const findLastUser = async (userRole: string) => {
  const lastUser = await User.findOne({ role: userRole }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id ? lastUser?.id : undefined;
};

export const generateBuyerId = async () => {
  const lastBuyerId = await findLastUser('buyer');

  let currentBuyerId = (0).toString();

  if (lastBuyerId) {
    currentBuyerId = lastBuyerId?.substring(7);
  }

  let incrementBuyerId = (Number(currentBuyerId) + 1).toString().padStart(4, '0');

  incrementBuyerId = `RH-B${incrementBuyerId}`;

  return incrementBuyerId;
};


export const generateSellerId = async() => {
  const lastSellerId = await findLastUser('seller');

  let currentSellerId = (0).toString();

  if (lastSellerId) {
    currentSellerId = lastSellerId?.substring(7);
  }

  let incrementSellerId = (Number(currentSellerId) + 1).toString().padStart(4, '0');

  incrementSellerId = `RH-S${incrementSellerId}`;

  return incrementSellerId;

}
