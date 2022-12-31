import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favReducer from "./slices/favoriteSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        favProducts: favReducer,
        cart: cartReducer 
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;