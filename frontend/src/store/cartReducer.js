import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const alreadyInCart = state.items.find(item => item.id === action.payload.id);
            if (alreadyInCart) {
                item.quantity += action.payload.quantity;
            } else {
                state.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        resetCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;