import { useState } from "react"
import "./delandedit.css"

var Array =()=>{
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
    var  addlist =()=>{
        var newlist =[...list]
        newlist.push("list"+Number((list.length)+1))
        listchange(newlist)

    }
    
    
    return  <div >
       <h1 style={{textAlign:'center'}}> Array Edit and Delete</h1>
          <button onClick={addlist}>click to add</button>
        <button onClick={deletelist}>click to delete</button>
        <ul>
            {list.map((item,i)=>{
                return <li key={i}>{item}</li>

            })}
        </ul>

    </div>
    
}
export default Array