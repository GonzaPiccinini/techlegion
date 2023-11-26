import { API_URL } from "../constants";
import { AuthUserAndToken, UserAuth } from "../models";

interface IDataLoginService extends AuthUserAndToken {
    message?: string
}

export const loginService = async ({ email, password }: UserAuth): Promise<IDataLoginService> => {
    const url = API_URL + '/auth/login'
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ email, password })
    })
    return await res.json()
}