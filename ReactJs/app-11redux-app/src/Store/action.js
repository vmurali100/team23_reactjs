export const deleteUserAction = (usr) => {
    return {
      type: "DELETE_USER",
      payload: usr,
    };
  };
  
  export const addUserAction =(usr)=>{
      
      return {
          type: "CREATE_USER",
          payload: usr,
        };
  }
  
  export const handleUpdateAction=(usrObj)=>{
      console.log(usrObj)
      return {
          type: "UPDATE_USER",
          payload: usrObj,
        };
  }