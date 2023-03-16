import { private_excludeVariablesFromRoot } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // item format: {...item, quantity}
  items: [],
  totalCount: 0,
  totalPrice: 0,
  totalPriceString: "0.00",
  restaurantId: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // action := {...item, quantity}
      const quantity = action.payload.quantity;
      const newItem = action.payload.item;
      const cartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalCount += quantity;
      const price = Number(((newItem.price / 100) * quantity).toFixed(2));
      state.totalPrice += price;
      state.totalPriceString = state.totalPrice.toFixed(2);
      if (!cartItem) {
        state.items.push({ ...newItem, quantity: quantity });
      } else {
        cartItem.quantity += quantity;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice -=
        (Number(removeItem.price) / 100) * removeItem.quantity;
      state.totalPriceString = state.totalPrice.toFixed(2);
      state.totalCount -= removeItem.quantity;
    },
    resetCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      state.totalPriceString = "0.00";
    },
    setRestaurantId: (state, action) => {
      state.restaurantId = action.payload;
    },
    unsetRestaurantId: (state) => {
      state.restaurantId = null;
    },
  },
});

export const {
  addItem,
  removeItem,
  resetCart,
  setRestaurantId,
  unsetRestaurantId,
} = cartSlice.actions;

export default cartSlice.reducer;
