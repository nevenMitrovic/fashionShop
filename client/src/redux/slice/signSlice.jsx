import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignIn: null
};

let signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        sign(state, action) {
            state.isSignIn = action.payload;
        }
    }
});

export const { sign } = signInSlice.actions;
export default signInSlice = signInSlice.reducer;