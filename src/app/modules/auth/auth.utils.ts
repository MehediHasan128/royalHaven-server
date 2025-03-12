import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { TUserJWTPayload } from './auth.interface';

export const convertHashPassToPlaiText = async(plainPass: string, hashPass: string) => {
    return await bcrypt.compare(plainPass, hashPass)
};


export const generateAccessSecretToken = (payload: TUserJWTPayload, secret_key: string, expIn: string): string => {
    return jwt.sign(payload, secret_key, {expiresIn: expIn})
}