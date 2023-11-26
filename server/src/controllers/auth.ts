import { Request, Response } from "express"
import { RequestWithEmail, User, UserAuth, UserWithPassword } from "../interfaces"
import { writeJson } from "../utils"
import { ERRORS, HTTP_STATUS_BAD_REQUEST, HTTP_STATUS_CREATED, HTTP_STATUS_OK } from "../constants"
import { loginService, loginWithTokenService, registerService } from "../services"

export const loginController = async (req: Request, res: Response) => {
    const userAuth: UserAuth = req.body
    if (!userAuth) {
        return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: ERRORS.USER_NOT_PROVIDED})
    }

    const data = await loginService(userAuth)
    if (typeof data === 'string') {
        return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: data})
    }

    return writeJson(res, HTTP_STATUS_OK, {
        token: data.token,
        user: data.user
    })
}


export const loginWithTokenController = async (req: RequestWithEmail, res: Response) => {
    try {
        if (!req.email) {
            return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: ERRORS.INVALID_TOKEN})
        }
        
        const data = await loginWithTokenService(req.email)
        if (typeof data === 'string') {
            return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: data})
        }

        const user: User = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        }
        return writeJson(res, HTTP_STATUS_OK, {user})
    } catch (error) {
        console.error(error)
    }
}

export const registerController = async (req: Request, res: Response) => {
    const userWithPassword: UserWithPassword = req.body
    if (!userWithPassword) {
        return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: ERRORS.USER_NOT_PROVIDED})
    }

    const data = await registerService(userWithPassword)
    if (typeof data === 'string') {
        return writeJson(res, HTTP_STATUS_BAD_REQUEST, {message: data})
    }

    return writeJson(res, HTTP_STATUS_CREATED, {
        token: data.token,
        user: data.user
    })
}