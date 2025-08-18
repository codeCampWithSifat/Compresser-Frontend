import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../Utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((p) => p._id === item._id);

      if (existItem) {
        // Increase qty
        existItem.qty += item.qty || 1;
      } else {
        state.cartItems.push({ ...item, qty: item.qty || 1 });
      }

      return updateCart(state); // persist in localStorage
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },

    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },

    incrementQty: (state, action) => {
      const productId = action.payload;

      const existItem = state.cartItems.find((item) => item._id === productId);

      if (existItem) {
        existItem.qty += 1;
      }

      return updateCart(state); // This will save to localStorage
    },

    decrementQty: (state, action) => {
      const productId = action.payload;
      const existItem = state.cartItems.find((item) => item._id === productId);
      if (existItem && existItem.qty > 1) {
        existItem.qty -= 1;
      }
      return updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCartItems,
  incrementQty,
  decrementQty,
} = cartSlice.actions;

export default cartSlice.reducer;
