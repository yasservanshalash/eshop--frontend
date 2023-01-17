import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { Product } from "../../types/types";

const localCart =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart")!)
    : [];

type initialStateType = {
  cart: Product[];
};

const initialState: initialStateType = {
  cart: localCart,
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
        localStorage.removeItem('cart');
        localStorage.setItem(
          "cart",
          JSON.stringify(state.cart.map((item: Product) => item))
        );
      }

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
        localStorage.removeItem('cart');
        localStorage.setItem(
          "cart",
          JSON.stringify(state.cart.map((item: Product) => item))
        );
    },
    increment: (state, action) => {
        const product = state.cart.find((product) => product.title === action.payload.title);
        if(product) {
            product.quantity = product.quantity! + 1
        }
        localStorage.removeItem('cart');
        localStorage.setItem(
          "cart",
          JSON.stringify(state.cart.map((item: Product) => item))
        );
    },
    decrement: (state, action) => {
        const product = state.cart.find((product) => product.title === action.payload.title);
        if(product) {
            product.quantity = product.quantity! - 1
        }
        localStorage.removeItem('cart');
        localStorage.setItem(
          "cart",
          JSON.stringify(state.cart.map((item: Product) => item))
        );
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
