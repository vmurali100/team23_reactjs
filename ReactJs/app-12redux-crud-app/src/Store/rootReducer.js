const initialState = {
    users: ["Jachu", "Vishal", "Sekhar", "Nethaji"],
    products: [],
    books: [],
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
          users: state.users.filter((usr) => usr !== action.payload),
        };
      case "UPDATE_USER":
        const updatedUsers = [...state.users];
        updatedUsers[action.payload.index] = action.payload.username;
        return {
          ...state,
          users: updatedUsers,
        };
  
        break;
      case "GET_USER":
        break;
      default:
        return state;
    }
  };
  