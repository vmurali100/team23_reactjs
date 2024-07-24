import { useState } from "react";

function User() {
    // var myName = "Jachu";
    // var person = {
    //     fname:"Jachu"
    // }
    // var users = ["Ram","Ravi"]

    var [myname, setMyName] = useState("Jeswanth !!");

    const handleNameChange = () => {
        setMyName("Kotholla Jachu !!!")
    }
    return (
        <div>
            <button onClick={handleNameChange}>Change MyName</button>
            <h2>Hello From User : {myname}</h2>
        </div>
    );
}

export default User;