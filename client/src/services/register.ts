import { API_URL } from "../constants";
import { AuthUserAndToken, UserRegister } from "../models";

interface IDataRegisterService extends AuthUserAndToken {
    message?: string
}

export const registerService = async ({ firstName, lastName, email, password }: UserRegister): Promise<IDataRegisterService> => {
    const url = API_URL + '/auth/register'
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password })
    })
    return await res.json()
}