import { useState } from "react";

function Variables (){
    const changename =() =>{
        name("krishna")
        

    }
   
    var [myname,name] =useState("vishal")
   
    return <div>
        <h2> user name is: {myname}</h2>
        <button onClick={changename}>click to change name</button><br />
         </div>
}
export default Variables