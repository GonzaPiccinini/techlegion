import { JwtPayload, SignOptions } from "jsonwebtoken";

export interface JwtCustomPayload {
    email: string
    exp: JwtPayload['exp']
    iat: JwtPayload['iat']
}

export interface JwtSignOptions {
    algorithm: SignOptions['algorithm']
    expiresIn: SignOptions['expiresIn']
}



