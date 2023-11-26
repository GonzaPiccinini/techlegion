import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage } from "../../utils";
import { AuthSliceModel, AuthUserAndToken } from "../../models";
import { AUTH_KEY, TOKEN_KEY } from "../../constants";

const EMPTY_AUTH_STATE: AuthSliceModel = {
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

export const AuthSlice = createSlice({
    name: AUTH_KEY,
    initialState: EMPTY_AUTH_STATE,
    reducers: {
        login: (state, action: PayloadAction<AuthUserAndToken>) => {
            state.logged = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout: () => {
            clearLocalStorage(TOKEN_KEY)
            return EMPTY_AUTH_STATE
        }
    }
})

export const { login, logout } = AuthSlice.actions

export default AuthSlice.reducer