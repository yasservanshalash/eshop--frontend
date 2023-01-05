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
        },
        sortByNameAscending: (state) => {
          state.products = state.products.sort(function (a, b) {
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
              return 1;
            }
            if (nameA < nameB) {
              return -1;
            }
    
            // names must be equal
            return 0;
          });
        },
        sortByNameDescending: (state) => {
          state.products = state.products.sort(function (a, b) {
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
    
            // names must be equal
            return 0;
          });
        },
        sortByPriceAscending: (state) => {
            state.products = state.products.sort((r1, r2) => (r1.price > r2.price) ? 1 : (r1.price < r2.price) ? -1 : 0);
        },
        sortByPriceDescending: (state) => {
            state.products = state.products.sort((r1, r2) => (r1.price < r2.price) ? 1 : (r1.price > r2.price) ? -1 : 0);
        },
    }
})

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;