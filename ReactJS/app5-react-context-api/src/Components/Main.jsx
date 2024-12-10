import React from "react";
import { useState } from "react";
import GrandParent from "./GrandParent";
import { UserInfoContext, UserInfoContextProvider } from "./UserContext";

const Main = () => {
  const [myDetails, setMyDetails] = useState({
    fname: "Murali",
    lname: "Krishna",
  });

  const [userInformation, setUserInformation] = useState({
    salary: 100000,
    role: "Full Stack Developer ",
  });
  return (
    <div id="mainComp">
      <UserInfoContextProvider value={userInformation}>
        <GrandParent myDetails={myDetails} />
      </UserInfoContextProvider>
    </div>
  );
};

export default Main;
