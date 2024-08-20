const initialState = {
    users: ['Visal', 'Ravi', 'Kumar'],
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            }
            break;
        case "DELETE_USER":
            return {
                ...state, 
                users: state.users.filter((usr) => usr !== action.payload),
            }
            break;
        case "UPDATE_USER":
            const upDatedUsers = [...state.users];
            upDatedUsers[action.payload.index] = action.payload.userName
            return {
                ...state,
                users: upDatedUsers
            }
            break;
        case "GET_USER":
            break;

        default:
            return state;
    }
};