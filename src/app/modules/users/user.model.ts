import { model, Schema } from 'mongoose';
import { TUser, TUserName } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

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

const UserSchema = new Schema<TUser>({
  id: {
    type: String,
    required: [true, 'User id is required'],
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
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  profileImage: {
    type: String,
    default: '',
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  role: {
    type: String,
    enum: ['buyer', 'seller', 'agent', 'admin'],
    required: [true, 'User role is required'],
  },
  status: {
    type: String,
    enum: ['active', 'pending', 'suspended', 'banned', 'deleted'],
    default: 'pending',
  },
  passwordChangeAt: {
    type: Date,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true});


// bcrypt user password
UserSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_saltround));
    next();
});


export const User = model<TUser>('User', UserSchema);