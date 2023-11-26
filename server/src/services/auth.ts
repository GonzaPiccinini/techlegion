import { ERRORS } from "../constants"
import { User, UserAuth, UserWithPassword } from "../interfaces"
import { UserModel } from "../models"
import { generateToken, hashPassword, validatePassword } from "../utils"
import { getUser } from "./user"

export const loginService = async (userAuth: UserAuth) => {
    const userDoc = await UserModel.findOne({'email': userAuth.email})
    if (!userDoc) {
        return ERRORS.USER_NOT_FOUND
    }

    if (!await validatePassword(userAuth.password, userDoc.password)) {
        return ERRORS.INVALID_PASSWORD
    }
    
    const user: User = {
        email: userDoc.email,
        firstName: userDoc.firstName,
        lastName: userDoc.lastName,
        createdAt: userDoc.createdAt,
        updatedAt: userDoc.updatedAt
    }
    return { 
        token: generateToken(userAuth.email) ,
        user
    }
}

export const loginWithTokenService = async (email: string): Promise<string | User> => {
    return await getUser(email)
}

export const registerService = async (userWithPassword: UserWithPassword) => {
    if (await UserModel.findOne({'email': userWithPassword.email})) {
        return ERRORS.USER_ALREADY_EXISTS
    }

    await UserModel.create({
        email: userWithPassword.email,
        firstName: userWithPassword.firstName,
        lastName: userWithPassword.lastName,
        password: await hashPassword(userWithPassword.password)
    })

    return await loginService({ email: userWithPassword.email, password: userWithPassword.password })
}