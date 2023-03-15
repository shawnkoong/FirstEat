import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // item format: {...item, quantity}
  items: [],
  totalCount: 0,
  totalPrice: 0,
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
        (item) => item.id === action.payload.item.id
      );
      state.totalCount += quantity;
      state.totalPrice += (newItem.price * quantity).toFixed(2); // fix price calculation and int to string
      if (!cartItem) {
        state.items.push({ ...newItem, quantity: quantity });
      } else {
        cartItem.quantity += quantity;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.item.id
      );
      state.totalCount--;
    },
    resetCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
