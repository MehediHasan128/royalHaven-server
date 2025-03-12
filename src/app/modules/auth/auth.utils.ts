import bcrypt from 'bcrypt';

export const convertHashPassToPlaiText = async(plainPass: string, hashPass: string) => {
    return await bcrypt.compare(plainPass, hashPass)
}