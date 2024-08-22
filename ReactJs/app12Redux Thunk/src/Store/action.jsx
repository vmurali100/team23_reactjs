export const deleteUserAction = (user) => {
    return async (dispatch) => {
        await fetch(`http://localhost:3000/data/${user.id}`, {
            method: "DELETE",
        });
        dispatch(getAllUsersAction());  // Fixed typo in function call
    };
};

export const addUserAction = (usr) => {  // Corrected function name case
    return async (dispatch) => {
        await fetch("http://localhost:3000/data", {
            method: "POST",
            body: JSON.stringify(usr),
            headers: {
                "Content-Type": "application/json",
            },
        });
        dispatch(getAllUsersAction());  // Fixed typo in function call
    };
};

export const handleUpdateAction = (usr) => {
    return async (dispatch) => {
        await fetch(`http://localhost:3000/data/${usr.id}`, {
            method: "PUT",
            body: JSON.stringify(usr),
            headers: {
                "Content-Type": "application/json",
            },
        });
        dispatch(getAllUsersAction());  // Fixed typo in function call
    };
};

export const getAllUsersAction = () => {  // Fixed function name
    return async (dispatch) => {
        const response = await fetch("http://localhost:3000/data");
        const data = await response.json();
        dispatch({
            type: "GET_ALL_USERS",
            payload: data,
        });
    };
};
