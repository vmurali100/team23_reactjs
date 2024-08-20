export const deleteUserAction = (usr) => {
    return async (dispatch) => {
        await fetch("http://localhost:3000/users/" + usr.id, {
            method: "DELETE"
        })
        dispatch(getAllUsersAction());
    }
};

export const addUserAction = (usr) => {
    return async (dispatch) => {
        await fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify(usr),
            headers: {
                "Content-Type": "application/json",
            },
        });
        dispatch(getAllUsersAction());
    };
};

export const handleUpdateAction = (usr) => {
    return async (dispatch) => {
        await fetch("http://localhost:3000/users/" + usr.id, {
            method: "PUT",
            body: JSON.stringify(usr),
            headers: {
                "Content-Type": "application/json",
            },
        })
        dispatch(getAllUsersAction());
    }
};

export const getAllUsersAction = () => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        dispatch({
            type: "GET_ALL_USERS",
            payload: data,
        });
    };
};