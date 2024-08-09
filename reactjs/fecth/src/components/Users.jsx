import React, { useEffect, useState } from 'react'
import Userstable from './Userstable'
import Usersform from './Usersform'

const Users = () => {
    const [users, setuser] = useState({
        Name: "",
        rollno: '',
        email: ''
    })
    
    const [allusers,setallusers] =useState([])
    const [isedit,setisedit] =useState(false)
    useEffect(()=>{
        read()
    },[])
    const handlecange = (e) => {
        const newuser = { ...users };
        newuser[e.target.name] = e.target.value
        setuser(newuser)
    }
    const create = async () => {
        const response = await fetch("http://localhost:3001/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        })
    
        read()
        clear()
    }
    const read = async() => {
       
            const response = await(await fetch("http://localhost:3001/data")).json(); 
            setallusers(response)

               
    
     }
     const edit = (usr) => {
        console.log(usr)
        setuser(usr);
        setisedit(true)
      }
    const update = async(usr) => { 
        const response = await fetch("http://localhost:3001/data"+usr.id,{
            method:"PUT",
            body:JSON.stringify(users),
            headers:{
                "Content-Type":"application.json",

            }
        })
        setisedit(false)
        clear()
        read()
    }
    const deluser = async(usr) => {
        console.log(usr)
        const response =await fetch("http://localhost:3001/data"+usr.id,{
            method:"DELETE"
        })
        read()
     }
    const clear=()=>{
        setuser({
            Name: "",
            rollno: '',
            email: ''
        })
        

    }
    return (
        <div>
            <h2> users</h2>
            <hr />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <Usersform users={users} handlecange={handlecange} create={create} update={update} isedit={isedit} />
                    </div>
                    <div class="col">
                        <Userstable allusers={allusers} deluser={deluser} edit={edit}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Users
