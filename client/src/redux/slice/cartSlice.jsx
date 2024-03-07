import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart: []
};

let cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.cart.push(action.payload);
        }
    }
});

export const {addToCart}=cartSlice.actions;
export default cartSlice=cartSlice.reducer;