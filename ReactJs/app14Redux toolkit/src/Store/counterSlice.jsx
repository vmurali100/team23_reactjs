import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const countSlice = createSlice({
    name: 'cunter',
    initialState,
    reducers: {
        incrementCount: (state, action) => {
            state.count++
        },
        decrementCount: (state, action) => {
            state.count--
        },
        resetCount: (state, action) => {
            state.count = 10;
        },
    },
});

export default countSlice.reducer

export const {incrementCount, decrementCount, resetCount} = countSlice.actions