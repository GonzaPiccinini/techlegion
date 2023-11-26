import('dotenv/config')
import { Response, NextFunction } from "express";
import { RequestWithEmail } from "../interfaces";
import { verifyToken, writeJson } from '../utils'
import { ERRORS, HTTP_STATUS_BAD_REQUEST } from "../constants";

export const validateToken = (req: RequestWithEmail, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: ERRORS.AUTHROIZATION_HEADER_NOT_PROVIDED})
        }

        const token = authHeader.split(' ').pop()
        if (!token) {
            return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: ERRORS.TOKEN_NOT_PROVIDED})
        } 

        const tokenInfo = verifyToken(token)
        
        if (typeof tokenInfo === 'string') {
            return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: tokenInfo})
        }

        req.email = tokenInfo.email
        next()
    } catch (error) {
        console.error(error)
    }
}