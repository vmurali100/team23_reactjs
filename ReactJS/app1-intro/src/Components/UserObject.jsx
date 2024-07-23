import { useState } from "react";

export const UserObject = () => {
  const [userInfo, setUserInfo] = useState({
    fname: "Ram",
    lname: "Krishna",
  });

  const changeObjectDetails = () => {
    setUserInfo({
      fname: "Sam",
      lname: "Sundar",
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
