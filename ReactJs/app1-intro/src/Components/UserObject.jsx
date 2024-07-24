import { useState } from "react";

export const UserObject = () => {
  const [userInfo, setUserInfo] = useState({
    fname: "Kotholla",
    lname: "Jachu",
  });

  const changeObjectDetails = () => {
    setUserInfo({
      fname: "Kotholla",
      lname: "Rahul",
    });
  };

  return (
    <div>
      <button onClick={changeObjectDetails}>Change Object Info</button>
      <ul>
        <li>{userInfo.fname}</li>
        <li>{userInfo.lname}</li>
      </ul>
    </div>
  );
};