export type TUserLogin = {
    userEmail: string;
    userPassword: string;
};

export type TUserJWTPayload = {
    userEmail: string;
    userId: string;
    userRole: string;
}