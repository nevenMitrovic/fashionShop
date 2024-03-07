import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slice/menuSlice";
import registerSlice from "./slice/registerSlice";
import signInSlice from './slice/signSlice';
import contactSlice from './slice/messageSlice';
import filterSlice from "./slice/filterSlice";
import productSlice from "./slice/productSlice";

const store = configureStore({
    reducer: {
        menu: menuSlice,
        register: registerSlice,
        signIn: signInSlice,
        contact: contactSlice,
        filters: filterSlice,
        product: productSlice
    }
})

export default store;