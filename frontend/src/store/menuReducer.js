import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: false,
  selectedItem: null,
  quantity: 1,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.selected = true;
      state.selectedItem = action.payload;
      state.quantity = 1;
    },
    closeModal: (state) => {
      state.selected = false;
      state.selectedItem = null;
      state.quantity = 1;
    },
    addQuantity: (state) => {
      state.quantity++;
    },
    removeQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity--;
      }
    },
  },
});

export const { selectItem, closeModal, addQuantity, removeQuantity } =
  menuSlice.actions;

export default menuSlice.reducer;
