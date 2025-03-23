import { model, Schema } from 'mongoose';
import { AddressSchema, UserNameSchema } from '../../global/model';
import { TSeller } from '../seller/seller.interface';

// const IdentityNumberSchema = new Schema<TIdentityNumber>({
//   passportNumber: { type: String },
//   drivingLicence: { type: String },
//   nationalIdCard: { type: String },
// });

const SellerRequestSchema = new Schema<TSeller>({
  id: { type: String, required: [true, 'Seller ID is required'] },
  userName: {
    type: UserNameSchema,
    required: true,
  },
  profileUniqueUserName: {
    type: String,
    required: [true, 'Profile unique username is required'],
    unique: true,
  },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  profileImage: { type: String, required: [true, 'Profile image is required'] },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'Gender must be either male or female',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String, required: [true, 'Date of birth is required'] },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  address: AddressSchema, // Assuming TAddress is another schema or object
  companyName: { type: String },
  websiteLink: { type: String },
  licenceNumber: { type: String },
  identityNumber: {
    type: String,
    required: [true, 'Identity number is required'],
  },
});



export const SellerRequest = model<TSeller>('sellerRequest', SellerRequestSchema);