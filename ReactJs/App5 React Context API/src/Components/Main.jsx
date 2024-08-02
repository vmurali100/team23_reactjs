import React, { useState } from 'react';
import GrandParent from './GrandParent';
import { UserInfoContextProvider } from './usercontext';

const Main = () => {
    const [myDetails, setMyDetails] = useState({
        fname: "Murali",
        lname: "Krishna"
    })

    const [userInformation, setuserInformation] = useState({
        Salary: 1000000,
        Roll: "Full stack develeper yes it is"
    })  
    return(
        <div id='mainComp'>
            <UserInfoContextProvider value={userInformation}>
            <GrandParent/>
            </UserInfoContextProvider>
            
        </div>
    )
}

export default Main;