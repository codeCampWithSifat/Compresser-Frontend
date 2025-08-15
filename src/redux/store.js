import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import counterReducer from "./slices/countSlice";
import cartReducer from "./slices/cartSlice";
import favouriteReducer from "./slices/favouriteSlice";
import { getFavoritesFromLocalStorage } from "../Utils/favouriteUtils";

const initialFavourites = getFavoritesFromLocalStorage() || [];
export const store = configureStore({
  reducer: {
    products: productReducer,
    counts: counterReducer,
    carts: cartReducer,
    favourites: favouriteReducer,

    preloadedState: {
      favourites: initialFavourites,
    },
  },
});
