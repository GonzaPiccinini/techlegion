import { configureStore } from "@reduxjs/toolkit";
import { CartSlice, UserSlice } from "./features";
import { AuthSlice } from "./features";
import { AuthSliceModel, Cart, User } from "../models";

export interface IStore {
    auth: AuthSliceModel
    cart: Cart
    user: User 
}

export default configureStore<IStore>({
    reducer: {
        auth: AuthSlice.reducer,
        cart: CartSlice.reducer,
        user: UserSlice.reducer
    }
})