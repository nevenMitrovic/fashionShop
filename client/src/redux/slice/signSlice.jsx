import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignIn: false,
    message: null,
    username:null,
    token: null
};

let signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        sign(state, action) {
            state.isSignIn = action.payload.signIn;
            state.message=action.payload.message;
            state.username=action.payload.username;
            state.token=action.payload.token;
        },
        messageNull(state,action){
            state.message=action.payload.null;
        },
        signO(state,action){
            state.isSignIn=action.payload.signOut;
            state.token=action.payload.token;
            state.username=action.payload.username;
        },
        staySignIn(state,action){
            state.isSignIn=action.payload.signIn;
            state.username=action.payload.username;
            state.token=action.payload.token;
        }
    }
});

export const { sign,messageNull,signO,staySignIn } = signInSlice.actions;
export default signInSlice = signInSlice.reducer;