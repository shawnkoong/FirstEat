import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItem: null,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        selectItem: (state, action) => {
            state.selectedItem = action.payload;
        },
        unselectItem: (state) => {
            state.selectedItem = null;
        }
    }
});

export const { selectItem, unselectItem } = menuSlice.actions;

export default menuSlice.reducer;