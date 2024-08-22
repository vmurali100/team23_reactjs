const initialState = {
    users: [],
    products: [],  // Consistent naming convention
    books: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((usr) => usr.id !== action.payload.id),
            };

        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map((usr) =>
                    usr.id === action.payload.id ? action.payload : usr
                ),
            };

        case "GET_ALL_USERS":
            return {
                ...state,
                users: action.payload,
            };

        default:
            return state;
    }
};
