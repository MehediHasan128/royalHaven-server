import { Schema } from 'mongoose';
import { TAddress, TUserName } from './interface';

export const UserNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
});

export const AddressSchema = new Schema<TAddress>({
  streetAddress: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  state: {
    type: String,
    default: null
  },
  postalCode: {
    type: String,
    default: null
  },
  country: {
    type: String,
    default: null
  },
});
