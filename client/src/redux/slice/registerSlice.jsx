import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isValid: false,
    formData: null
};

let registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerUser(state, action) {
            state.isValid = action.payload.validator;
            state.formData= action.payload.formData;
        }
    }
})

export const { registerUser } = registerSlice.actions;
export default registerSlice = registerSlice.reducer;