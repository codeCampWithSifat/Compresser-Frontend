import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import favouriteReducer from "./slices/favouriteSlice";
import cartReducer from "./slices/cartSlice";
import { getFavoritesFromLocalStorage } from "../Utils/favouriteUtils";

const initialFavourites = getFavoritesFromLocalStorage() || [];
export const store = configureStore({
  reducer: {
    products: productReducer,
    favourites: favouriteReducer,
    carts: cartReducer,
  },
  preloadedState: {
    favourites: initialFavourites,
  },
});
