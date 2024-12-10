import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
const UsersSlice = createSlice({
  name: "users",
  initialState,
});

export default UsersSlice.reducer;
export const { deleteUserAction, addUserAction,updateUserAction } = UsersSlice.actions;
