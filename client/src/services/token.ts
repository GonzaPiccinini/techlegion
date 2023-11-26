import { API_URL } from "../constants"
import { User } from "../models"
import { setTokenWithBearer } from "../utils/token"

export interface IDataTokenService {
    message?: string
    user?: User
}

export const validateTokenService = async (token: string): Promise<IDataTokenService> => {
    const url = API_URL + '/auth/loginWithToken'
        const response = await fetch(url, {
            headers: {
                'Authorization': setTokenWithBearer(token)
            },
            method: 'POST'
        })
        const data: IDataTokenService = await response.json()
        return data
}