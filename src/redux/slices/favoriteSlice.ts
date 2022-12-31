import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

type initialStateType = {
    favProducts: Product[]
}

const initialState: initialStateType = {
    favProducts: []
}

const favProductsSlice = createSlice({
    name: "favProducts",
    initialState,
    reducers: {
        addFavResolution: (state, action: PayloadAction<Product>) => {
            if (state.favProducts.find((product: Product) => product.title === action.payload.title)) {
                return;
              } else {
                state.favProducts.push(action.payload);
              }
            },
            removeFavResolution: (state, action) => {
                const result = state.favProducts.findIndex(
                    (product) => product.title === action.payload
                  );
                  if (result !== -1) {
                    state.favProducts.splice(result, 1);
                  }
            }
    }
})

export const favActions = favProductsSlice.actions;
const favReducer = favProductsSlice.reducer;
export default favReducer;