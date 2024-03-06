import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allProducts: null,
    search: null,
    range: null,
    checkbox:[],
};

let productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(state, action) {
            state.allProducts = action.payload.products;
        },
        searchFilter(state,action){
            state.search=action.payload.value;
        },
        rangeFilter(state,action){
            state.range=action.payload.value;
        },
        checkFilter(state,action){
            if(action.payload.state){
                state.checkbox.push(action.payload.value);
            }else{
                state.checkbox=state.checkbox.filter(e=>e!==action.payload.value);
            }
        }
}});

export const { getProducts,searchFilter,rangeFilter, checkFilter } = productSlice.actions;
export default productSlice = productSlice.reducer;