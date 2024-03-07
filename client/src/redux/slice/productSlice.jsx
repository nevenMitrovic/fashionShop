import { createSlice } from "@reduxjs/toolkit";

const initialState={
    productOpen: false
};

let productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        toggleProduct(state,action){
            state.productOpen=action.payload.state;
        }
    }
});

export const {toggleProduct}=productSlice.actions;
export default productSlice=productSlice.reducer;