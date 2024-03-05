import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    infoMessage: null
}

let contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        updateInfo(state, action) {
            state.infoMessage = action.payload.info;
        },
        updateInfoNull(state,action){
            state.infoMessage=action.payload.null;
        }
    }
});

export const { updateInfo,updateInfoNull } = contactSlice.actions;
export default contactSlice = contactSlice.reducer;