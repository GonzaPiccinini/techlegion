import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, setLocalStorage } from "../../utils";
import { AuthUserAndToken, Token } from "../../models";
import { AUTH_KEY, EMPTY_AUTH_STATE, TOKEN_KEY } from "../../constants";

export const AuthSlice = createSlice({
    name: AUTH_KEY,
    initialState: EMPTY_AUTH_STATE,
    reducers: {
        login: (state, action: PayloadAction<AuthUserAndToken>) => {
            state.logged = true
            state.token = action.payload.token
            state.user = action.payload.user
            setLocalStorage<Token>(TOKEN_KEY, action.payload.token)
        },
        logout: () => {
            clearLocalStorage(TOKEN_KEY)
            return EMPTY_AUTH_STATE
        }
    }
})

export const { login, logout } = AuthSlice.actions

export default AuthSlice.reducer