import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: false,
    selectedItem: null,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        selectItem: (state, action) => {
            state.selected = true;
            state.selectedItem = action.payload;
        },
        closeModal: (state) => {
            state.selected = false;
            state.selectedItem = null;
        }
    }
});

export const { selectItem, closeModal } = menuSlice.actions;

export default menuSlice.reducer;