import { useState } from "react"

var Editarray =()=>{
    var [myname,name]=useState("hello this is te edited array");
    var [list,listchange]=useState([
        "list1",
        "list2",
       "list3"
    ])
    var  addlist =()=>{
        var newlist =[...list]
        newlist.push("list"+Number((list.length)+1))
        listchange(newlist)

    }
    return  <div>
        <button onClick={addlist}>click to add</button>
        <ul>
            {list.map((item,i)=>{
                return <li key={i}>{item}</li>

            })}
        </ul>

    </div>
    
}
export default Editarray