import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRegister: null
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
        }
    }
})

export const { registerUser,registerNull } = registerSlice.actions;
export default registerSlice = registerSlice.reducer;