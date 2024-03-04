import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRegister: null,
    password: null,
    passwordVisible: false,
    passInfo: false
};

let registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerUser(state, action) {
            state.isRegister=action.payload.regStatus;
        },
        registerNull(state,action){
            state.isRegister=action.payload.null;
        },
        updatePass(state,action){
            state.password=action.payload.password;
        },
        updateVisibility(state,action){
            state.passwordVisible=action.payload.visibility;
        },
        infoPassword(state,action){
            state.passInfo=action.payload.visibility;
        }
    }
})

export const { registerUser,registerNull,updatePass,updateVisibility,infoPassword } = registerSlice.actions;
export default registerSlice = registerSlice.reducer;