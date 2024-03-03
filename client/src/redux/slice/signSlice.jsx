import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignIn: false,
    message: null,
    username:null
};

let signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        sign(state, action) {
            state.isSignIn = action.payload.signIn;
            state.message=action.payload.message;
            state.username=action.payload.username;
        },
        messageNull(state,action){
            state.message=action.payload.null;
        },
        signO(state,action){
            state.isSignIn=action.payload.signOut;
        }
    }
});

export const { sign,messageNull,signO } = signInSlice.actions;
export default signInSlice = signInSlice.reducer;