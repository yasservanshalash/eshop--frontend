import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";
type initialStateType = {
    products: Product[],
    loading: boolean
}
const initialState: initialStateType = {
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