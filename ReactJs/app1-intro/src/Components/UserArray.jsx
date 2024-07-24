import { useState } from "react";

export const UserArray = () => {
  const [users, setUsers] = useState(["Mahi", "Santho", "Praveen", "Vamsi"]);

  const changeArrayValues = () => {
    setUsers(['Jachu','Vishal','Shekar','Vinod'])
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