import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

type initialState = {
    cart: Product[]
}

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
})

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;