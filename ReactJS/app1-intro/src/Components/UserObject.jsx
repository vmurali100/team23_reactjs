import { useState } from "react";

export const UserObject = () => {
  const [userInfo, setUserInfo] = useState({
    fname: "Murali",
    lname: "Krishna",
    email: "murali@gmail.com",
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
      {/* <ul>
        <li>{userInfo.fname}</li>
        <li>{userInfo.lname}</li>
        <li>{userInfo.email}</li>
      </ul> */}

      <ul>
        {Object.values(userInfo).map((val,i)=>{
          return <li key={i}>{val}</li>
        })}
      </ul>
    </div>
  );
};
