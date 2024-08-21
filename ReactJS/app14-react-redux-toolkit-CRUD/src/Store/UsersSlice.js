import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 3, name: "Sam Green", age: 35, email: "sam@example.com" },
    { id: 4, name: "Emily Brown", age: 28, email: "emily@example.com" },
    { id: 5, name: "Michael Johnson", age: 40, email: "michael@example.com" },
  ],
};
const UsersSlice = createSlice({
  name: "users",
  reducers: {
    deleteUserAction: (state, action) => {
      state.users.splice(action.payload.index, 1);
    },
    addUserAction: (state, action) => {
      state.users.push(action.payload);
    },
    updateUserAction: (state, action) => {
      state.users[action.payload.index] = action.payload.user;
    },
  },
  initialState,
});

export default UsersSlice.reducer;
export const { deleteUserAction, addUserAction,updateUserAction } = UsersSlice.actions;
