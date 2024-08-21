import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};

const getLatestUsers = async () => {
  return await (await fetch("http://localhost:3201/users")).json();
};
export const getAllUsersAsync = createAsyncThunk(
  "users/getAllUsers",
  async () => {
    return getLatestUsers();
  }
);
export const deleteUsersAsync = createAsyncThunk(
  "users/deleteUsersAsync",
  async (user) => {
    const response = await fetch("http://localhost:3201/users/" + user.id,{
      method:"DELETE"
    });
    return getLatestUsers();
  }
);

export const updateUsersAsync = createAsyncThunk(
  "users/getAllUsers",
  async (user) => {
    const response = await fetch("http://localhost:3201/users/" + user.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return getLatestUsers();
  }
);

export const createUsersAsync = createAsyncThunk(
  "users/createUsersAsync",
  async (user) => {
    const response = await fetch("http://localhost:3201/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return getLatestUsers();
  }
);
const UsersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload
    });
    builder.addCase(getAllUsersAsync.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getAllUsersAsync.pending, (state, action) => {
      console.log(action.payload);
    });

    // Handle Creating User

    builder.addCase(createUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload
    });

    // Handle Delete User
    builder.addCase(deleteUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload
    });

    //Handle udpate User

    // builder.addCase(updateUsersAsync.fulfilled, (state, action) => {});
  },
});

export default UsersSlice.reducer;
export const { deleteUserAction, addUserAction, updateUserAction } =
  UsersSlice.actions;
