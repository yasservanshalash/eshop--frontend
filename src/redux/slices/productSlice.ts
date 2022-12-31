import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";
type initialState = {
    products: Product[],
    loading: boolean
}
const initialState = {
    products: [],
    loading: false
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProductsData: (state, action) => {
            state.products = action.payload
        },
        toggleLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;