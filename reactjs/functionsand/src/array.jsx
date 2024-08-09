import { useState } from "react";

export const UsersArray = () => {
  const [users, setUsers] = useState(["Kiran", "Kumar", "Ram", "Ravi"]);

  const changeArrayValues = () => {
    setUsers(['Raghu','Vishal','Shekar','Jashwanth'])
  };
  return (
    <div>
      <button onClick={changeArrayValues}>Change Values In Array</button>
      <ul>
        {users.map((usr) => {
          return <li>{usr}</li>;
        })}
      </ul>
    </div>
  );
};