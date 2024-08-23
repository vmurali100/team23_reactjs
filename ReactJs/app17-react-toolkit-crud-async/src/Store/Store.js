import { configureStore } from "@reduxjs/toolkit";
import PersonsSlice from "./PersonsSlice";
export const Store = configureStore({
    reducer: {
        persons: PersonsSlice
    }
});