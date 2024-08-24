import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    persons: [],
};

const getLatestPersons = async () => {
    return await (await fetch("http://localhost:3002/persons")).json();
};
export const getAllPersonsAsync = createAsyncThunk(
    "persons/getAllPersons",
    async () => {
        return getLatestPersons();
    }
);

export const deletePersonsAsync = createAsyncThunk(
    "persons/deletePersonsAsync",
    async (person) => {
        const response = await fetch("http://localhost:3002/persons/" + person.id, {
            method: "DELETE"
        });
        return getLatestPersons();
    }
);

export const updatePersonsAsync = createAsyncThunk(
    "persons/getAllPersons",
    async (person) => {
        const response = await fetch("http://localhost:3002/persons/" + person.id, {
            method: "PUT",
            body: JSON.stringify(person),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return getLatestPersons();
    }
);

export const createPersonsAsync = createAsyncThunk(
    "persons/createPersonsAsync",
    async (person) => {
        const response = await fetch("http://localhost:3002/persons", {
            method: "POST",
            body: JSON.stringify(person),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return getLatestPersons();
    }
);

const PersonsSlice = createSlice({
    name: "persons",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllPersonsAsync.fulfilled, (state, action) => {
            state.persons = action.payload
        });
        // builder.addCase(getAllPersonsAsync.rejected, (state, action) => {
        //     console.log(action.payload);
        // });
        // builder.addCase(getAllPersonsAsync.pending, (state, action) => {
        //     console.log(action.payload);
        // });

        // Handle Create User

        builder.addCase(createPersonsAsync.fulfilled, (state, action) => {
            state.persons = action.payload
        })

        //Handle Delete User

        builder.addCase(deletePersonsAsync.fulfilled, (state, action) => {
            state.persons = action.payload
        });

        // //Handle update User

        // builder.addCase(updatePersonsAsync.fulfilled, (state, action) => {
        //     state.persons = action.payload
        // });

    },
});

export default PersonsSlice.reducer;
export const { deletePersonAction, addPersonAction, updatePersonAction } = PersonsSlice.actions;