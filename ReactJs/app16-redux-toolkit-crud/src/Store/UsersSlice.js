import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Jeswanth", age: 32, email: "jeswanth@gmail.com" },
    { id: 2, name: "Vishal", age: 21, email: "vishal@gmail.com" },
    { id: 3, name: "Sekhar", age: 30, email: "sekhar@gmail.com" },
    { id: 4, name: "Nethaji", age: 23, email: "nethaji@gmail.com" },
    { id: 5, name: "Vinod", age: 30, email: "vinod@gmail.com" }
  ]
};

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserAction: (state, action) => {
      state.users.splice(action.payload.index, 1);
    },
    addUserAction: (state, action) => {
      state.users.push(action.payload);
    },
    updateUserAction: (state, action) => {
      const { index, user } = action.payload;
      state.users[index] = user;
    }
  }
});

export default UsersSlice.reducer;
export const { deleteUserAction, addUserAction, updateUserAction } = UsersSlice.actions;
