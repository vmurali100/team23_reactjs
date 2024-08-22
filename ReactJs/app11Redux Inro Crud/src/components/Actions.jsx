export const deleteUserAction = (usr)=>{
    return {
        type: "DELETE_USER",
        payload: usr
    }
}

export const adduserAction = (usr)=>{
    return {
        type: "CREATE_USER",
        payload: usr,
    }
}

export const userUpdateAction = (usrObj)=>{
    return {
        type: "UPDATE_USER",
        payload: usrObj,
    }
}