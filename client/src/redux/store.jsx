import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slice/menuSlice";
import registerSlice from "./slice/registerSlice";

const store=configureStore({
    reducer:{
        menu:menuSlice,
        register:registerSlice
    }
})

export default store;