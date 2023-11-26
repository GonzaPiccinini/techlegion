import jwt from "jsonwebtoken"
import { ERRORS, JWT_SECRET } from "../constants"
import { Token } from '../types'
import { JwtCustomPayload, JwtSignOptions } from "../interfaces"

export const generateToken = (email: string): Token => {
    const jwtSignOptions: JwtSignOptions = {
        algorithm: 'HS256',
        expiresIn: '1m'
    }

    return jwt.sign({email}, JWT_SECRET, {
        algorithm: jwtSignOptions.algorithm,
        expiresIn: jwtSignOptions.expiresIn
    })
}

export const verifyToken = (token: string) => {
    const decodedToken = jwt.decode(token) as JwtCustomPayload

    if (Date.now() >= (decodedToken.exp as number) * 1000) {
        return ERRORS.TOKEN_EXPIRED
    }
    
    const jwtCustomPayload: JwtCustomPayload = {
        email: '',
        exp: undefined,
        iat: undefined
    }
    return {...jwtCustomPayload, ...decodedToken}
}