//Create,Read,Update And Delete

const defaultState = {
  users: ["Murali","Krishna","Ram"],
};
export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE":
      // Add a value in a state
      break;
    case "READ":
      // send All State
      break;
    case "UPDATE":
      // update the value
      break;
    case "DELETE":
      // delete a Value
      break;

    default:
      return state;
  }
};
