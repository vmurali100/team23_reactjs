import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
        { title: "Moby-Dick", author: "Herman Melville", year: 1851 }
    ]
}

const UserSlice = createSlice({
    name: 'users',
    reducers: {
        deleteUserAction: (state, action) => {
            state.users.splice(action.payload.index, 1)
        }
    },
    initialState
});

export default UserSlice.reducer;
export const { deleteUserAction } = UserSlice.actions