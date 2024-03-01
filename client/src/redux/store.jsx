import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slice/menuSlice";
import registerSlice from "./slice/registerSlice";
import signInSlice from './slice/signSlice'

const store = configureStore({
    reducer: {
        menu: menuSlice,
        register: registerSlice,
        signIn: signInSlice
    }
})

export default store;