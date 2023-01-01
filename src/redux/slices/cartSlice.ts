import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { Product } from "../../types/types";

type initialStateType = {
  cart: Product[];
};

const initialState: initialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      if (
        state.cart.find((item: Product) => item.title === action.payload.title)
      ) {
        return;
      } else {
        state.cart.push(action.payload);
      }
      console.log(current(state.cart))

    },
    // removeFromCart: (state, action) => {
    //   const result = state.cart.findIndex(
    //     (item: Product) => item.title === action.payload
    //   );
    //   if (result !== -1) {
    //     state.cart.splice(result, 1);
    //   }
    // },
    removeFromCart: (state, action) => {
        state.cart.splice(state.cart.findIndex((item) => item.title === action.payload), 1);
    },
    increment: (state, action) => {
        const product = state.cart.find((product) => product.title === action.payload.title);
        if(product) {
            product.quantity = product.quantity! + 1
        }
    },
    decrement: (state, action) => {
        const product = state.cart.find((product) => product.title === action.payload.title);
        if(product) {
            product.quantity = product.quantity! - 1
        }
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
