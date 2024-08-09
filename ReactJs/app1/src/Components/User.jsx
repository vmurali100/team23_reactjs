import { useState } from "react";

function User() {
    const handleChangeName = () => {
        setname('Ram Kumar !!!')
    }
    var [myname, setname] = useState("Murali Krishna")
    return <div>
        <button onClick={handleChangeName}>Change my Name</button>
        <h2>Hellow from userr : {myname}</h2>
    </div>
}
export default User;
