import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../models";

const EMPTY_CART_STATE: Cart = {
    products: [],
    userId: 0
}

const CART_KEY = 'cart'

export const CartSlice = createSlice({
    name: CART_KEY,
    initialState: EMPTY_CART_STATE,
    reducers: {
        updateCart: (state, action) => {
            return {...state, ...action.payload}
        },
        clearCart: () => {
            return EMPTY_CART_STATE
        }
    }
})

export const { updateCart, clearCart } = CartSlice.actions

export default CartSlice.reducer