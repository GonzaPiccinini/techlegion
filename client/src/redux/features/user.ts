import { createSlice } from "@reduxjs/toolkit";
import { USER_KEY } from "../../constants";
import { User } from "../../models";

const EMPTY_USER_STATE: User = {
    email: '',
    firstName: '',
    id: 0,
    lastName: ''
}

export const UserSlice = createSlice({
    name: USER_KEY,
    initialState: EMPTY_USER_STATE,
    reducers: {
        createUser: (_state, action) => {
            return {...action.payload}
        },
        updateUser: (state, action) => {
            return {...state, ...action.payload}
        }, 
        deleteUser: (state) => {
            return state
        }
    }
})

export const { createUser, updateUser, deleteUser } = UserSlice.actions

export default UserSlice.reducer


