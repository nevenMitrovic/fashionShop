import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    search: null,
    range: null,
    checkbox: [],
    comboGenderState: "0",
    comboSaleNewState: "0"
};

let filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        searchFilter(state, action) {
            state.search = action.payload.value;
        },
        rangeFilter(state, action) {
            state.range = action.payload.value;
        },
        checkFilter(state, action) {
            if (action.payload.state) {
                state.checkbox.push(action.payload.value);
            } else {
                state.checkbox = state.checkbox.filter(e => e !== action.payload.value);
            }
        },
        comboGender(state, action) {
            state.comboGenderState = action.payload.value;
        },
        comboSaleNew(state, action) {
            state.comboSaleNewState = action.payload.value;
        }
    }
});

export const { searchFilter, rangeFilter, checkFilter, comboGender, comboSaleNew } = filterSlice.actions;
export default filterSlice = filterSlice.reducer;