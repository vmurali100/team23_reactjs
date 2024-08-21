import { configureStore } from "@reduxjs/toolkit";
import  UsersSlice  from "./UsersSlice";
export const Store = configureStore({
    reducer:{
        users:UsersSlice
    }
});
