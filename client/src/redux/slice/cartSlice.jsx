import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

let cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            let product = state.cart.find(e => e.id === action.payload._id);
            if (product === undefined) {
                action.payload.quantity = 1;
                state.cart.push(action.payload);
            } else {
                product.quantity += 1;
            }
        },
        increment(state, action) {
            let product = state.cart.find(e => e.id === action.payload.id);
            product.quantity += 1;
        },
        decrement(state, action) {
            let product = state.cart.find(e => e.id === action.payload.id);
            product.quantity -= 1;
        },
        removeItm(state, action) {
            state.cart = state.cart.filter(e => e.id !== action.payload.id);
        }
    }
});

export const { addToCart, increment, decrement, removeItm } = cartSlice.actions;
export default cartSlice = cartSlice.reducer;