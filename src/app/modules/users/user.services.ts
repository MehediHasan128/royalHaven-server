/* eslint-disable @typescript-eslint/no-explicit-any */
import { startSession } from 'mongoose';
import { TBuyer } from '../buyer/buyer.interface';
import { Buyer } from '../buyer/buyer.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../error/AppError';
import httpStatus from 'http-status-codes';
import { TSeller } from '../seller/seller.interface';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const createUserIntoDB = async (password: string, payload: TBuyer) => {
  // First create a user into db
  const userData: Partial<TUser> = {};

  // Set user id automatically
  userData.id = '1245631';
  // Set user name
  userData.userName = payload.userName;
  // Set user email
  userData.email = payload.email;
  // Set user password
  userData.password = password;

  const session = await startSession();

  try {
    // Start session
    session.startTransaction();

    // Create user into db (transaction-1)
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    payload.id = newUser[0].id;
    payload.userId = newUser[0]._id;

    // Crete buyer into db (transaction-2)
    const newBuyer = await Buyer.create(payload);
    await newBuyer.save();
    if (!newBuyer) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create buyer');
    }

    await session.commitTransaction();
    await session.endSession();
    return newBuyer;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    return err;
  }
};

const createSellerIntoDB = async(payload: TSeller) => {
  console.log(payload);
}


const uploadUserImageIntoDB = async(file: any, userId: string) => {
  const user = await User.findOne({id: userId}, {userName: 1, _id: 0});
  
  const imageName = `${userId}-${user?.userName?.lastName}`;
  const imagePath = file?.path;

  const uploadImage = await sendImageToCloudinary(imagePath, imageName);
  const userImageURL = uploadImage?.secure_url;
  
  // update image url in user or buyer collection
  await User.findOneAndUpdate({id: userId}, {profileImage: userImageURL}, {new: true});
  await Buyer.findOneAndUpdate({id: userId}, {profileImage: userImageURL}, {new: true}); 
}

export const UserServices = {
  createUserIntoDB,
  createSellerIntoDB,
  uploadUserImageIntoDB
};
