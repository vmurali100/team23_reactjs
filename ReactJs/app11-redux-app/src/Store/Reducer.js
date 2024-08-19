const defaultState = {
    users: ["Jeswanth","Vishal","Sekhar","Nethaji"],
  };
  export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "CREATE":
        break;
      case "READ":
        break;
      case "UPDATE":
        break;
      case "DELETE":
        break;
  
      default:
        return state;
    }
  };