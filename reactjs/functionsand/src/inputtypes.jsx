import { useState } from "react";
import Child from "./child";

function Variables (){
    const changename =() =>{
        name("krishna")
        

    }
   
    var [myname,name] =useState("vishal");
    var[my,name] =useState("vishal");
    
    
   
    return <div>
        <h2> user name is: {myname}</h2>
        <button onClick={changename}>click to change name</button><br />
        <Child msg={"myname"} hello={"welcome"} />
      
         </div>
        
         
         
}

export default Variables