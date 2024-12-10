import { useState } from "react";

function User() {
  // var myName = "Murali";
  // var person = {
  //     fname:"Murali"
  // }
  // var users = ["Ram","Ravi"]

  // to Declare the above data , we need useState hook
  var [myname, setMyName] = useState("Murali Krishna !!");

  const handleNameChange = ()=>{
    setMyName("Ram Kumar !!!")
  }
  return (
    <div>
        <button onClick={handleNameChange}>Change MyName</button>
      <h2>Hello From User : {myname}</h2>
    </div>
  );
}

export default User;
