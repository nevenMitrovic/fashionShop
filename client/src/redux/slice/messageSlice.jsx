import { createSlice } from "@reduxjs/toolkit";

const initialState={
    messageContact: null
}

let contactSlice=createSlice({
    name:'contact',
    initialState,
    reducers:{
        updateMessage(state,action){
            state.messageContact=action.payload.message;
        }
    }
});

export const {updateMessage}=contactSlice.actions;
export default contactSlice=contactSlice.reducer;