import { useState } from "react"

var Deletearray =()=>{
    var [myname,name]=useState("hello this is te edited array");
    var [list,listchange]=useState([
        "list1",
        "list2",
       "list3"
    ])
    var  deletelist =()=>{
        var newlist =[...list]
        newlist.pop()
        listchange(newlist)

    }
    return  <div>
        <button onClick={deletelist}>click to delete</button>
        <ul>
            {list.map((item,i)=>{
                return <li key={i}>{item}</li>

            })}
        </ul>

    </div>
    
}
export default Deletearray