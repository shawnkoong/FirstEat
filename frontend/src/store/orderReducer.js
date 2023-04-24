import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: false,
  selectedOrder: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    selectOrder: (state, action) => {
      state.selected = true;
      state.selectedOrder = action.payload;
    },
    closeModal: (state) => {
      state.selected = false;
      state.selectedOrder = null;
    },
  },
});

export const { selectOrder, closeModal } = orderSlice.actions;

export default orderSlice.reducer;
