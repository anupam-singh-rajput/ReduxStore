import { createSlice } from "@reduxjs/toolkit";

let counter = 1;

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const product = { ...action.payload, id: counter }; // Added the unique ID
            counter += 1;
            state.push(product);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
