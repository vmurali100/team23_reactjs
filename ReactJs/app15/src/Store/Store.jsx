import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSclice";

export const Store = configureStore({
    reducer: {
        users:UserSlice
    }
})