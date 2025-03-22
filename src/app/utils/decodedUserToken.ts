import {jwtDecode, JwtPayload} from 'jwt-decode';

export const decodedUserToken = async(token: string) => {
    return jwtDecode(token) as JwtPayload;
}