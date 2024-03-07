import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slice/menuSlice";
import registerSlice from "./slice/registerSlice";
import signInSlice from './slice/signSlice';
import contactSlice from './slice/messageSlice';
import filterSlice from "./slice/filterSlice";

const store = configureStore({
    reducer: {
        menu: menuSlice,
        register: registerSlice,
        signIn: signInSlice,
        contact: contactSlice,
        filters: filterSlice,
    }
})

export default store;