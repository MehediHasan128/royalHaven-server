import { User } from './user.model';

const findLastUser = async () => {
  const lastUser = await User.findOne({ role: 'buyer' }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id ? lastUser?.id : undefined;
};

export const generateUserId = async () => {
  const lastUserId = await findLastUser();

  let currentUserId = (0).toString();

  if (lastUserId) {
    currentUserId = lastUserId?.substring(8);
  }

  let incrementUserId = (Number(currentUserId) + 1).toString().padStart(3, '0');

  incrementUserId = `RH-UI${incrementUserId}`;

  return incrementUserId;
};
