import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";

export const Store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});