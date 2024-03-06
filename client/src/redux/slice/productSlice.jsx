import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: null
};


let productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(state, action) {
            state.allProducts = action.payload.products;
        },
    }
});

export const { getProducts } = productSlice.actions;
export default productSlice = productSlice.reducer;