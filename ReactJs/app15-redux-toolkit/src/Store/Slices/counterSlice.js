import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.count++;
    },
    decrementCount: (state, action) => {
      state.count--;
    },
    resetCount:(state,action)=>{
        state.count = 10;
    }
  },
});

export default counterSlice.reducer;
export const { incrementCount, decrementCount , resetCount} = counterSlice.actions;