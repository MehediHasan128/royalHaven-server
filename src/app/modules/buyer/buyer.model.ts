import { model, Schema } from 'mongoose';
import { TBuyer } from './buyer.interface';
import { AddressSchema, UserNameSchema } from '../../global/model';

const UserSchema = new Schema<TBuyer>(
  {
    id: {
      type: String,
      required: [true, 'User id is required'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is required.'],
      ref: 'User',
    },
    profileImage: {
      type: String,
      default: '',
    },
    userName: {
      type: UserNameSchema,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Invalid email format'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', ''],
      default: '',
    },
    dateOfBirth: {
      type: Date,
    },
    contactNumber: {
      type: String,
    },
    address: AddressSchema,
  },
  { timestamps: true },
);

export const Buyer = model<TBuyer>('Buyer', UserSchema);
