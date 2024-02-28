import {createSlice} from '@reduxjs/toolkit';

const initialState={
    open:false,
}

let menuSlice=createSlice({
    name:'menu',
    initialState,
    reducers:{
        setMenu(state,action){
            state.open=action.payload.open;
        }
    }
});

export const {setMenu}=menuSlice.actions;
export default menuSlice=menuSlice.reducer;