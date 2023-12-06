import { AuthSliceModel, UserAuth, UserRegister } from "../models";

export const EMPTY_LOGIN: UserAuth = {
    email: '',
    password: ''
}

export const EMPTY_AUTH_STATE: AuthSliceModel = {
    logged: false,
    token: '',
    user: {
        email: '',
        firstName: '',
        lastName: '',
        createdAt: 0,
        updatedAt: 0
    }
}

export const EMPTY_REGISTER: UserRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}