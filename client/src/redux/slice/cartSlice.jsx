import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart: []
};

let cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            let product=state.cart.find(e=>e._id===action.payload._id);
            if(product===undefined){
                action.payload.quantity=1;
                state.cart.push(action.payload);
            }else{
                product.quantity+=1;
            }
        }
    }
});

export const {addToCart}=cartSlice.actions;
export default cartSlice=cartSlice.reducer;