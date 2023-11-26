import { ERRORS } from "../constants"
import { User } from "../interfaces"
import { UserModel } from "../models"

export const getUser = async (email: string) => {
    const user = await UserModel.findOne({ 'email': email })

    if (!user) return ERRORS.USER_NOT_FOUND
    
    return user
}

export const deleteUser = async (email: string) => {
    return await UserModel.deleteOne({'email': email})
}