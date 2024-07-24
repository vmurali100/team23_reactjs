import { useState } from "react"

export const Userobject = () => {
    var [user,setuser] = useState({
        fname: "vishal",
        lname: "M.G.",
    })

var changeobject = () => {
     setuser({
        fname: "krishna",
        lname: "d"

    })
    return <div>
    <button onClick={changeobject}>click to change object</button>
    
        <li>{Userobject.lname}</li>
        <li>{Userobject.fname}</li>
   
</div>
};
};
export default Userobject