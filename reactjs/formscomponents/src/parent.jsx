import React from 'react'
import Forms from './forms'
import Table from './table'
import { useState } from "react";
import "./parent.css"

const Parent = () => {
  const [user, name] = useState({
    fname: "",
    lname: "",
    email: ""
  })
  const handlecange = (e) => {
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    name(newuser)


  }
  const [allusers, setallusers] = useState([])
  const [isedit, edited] = useState(false)
  const [ind, setind] = useState(null)
  const adduser = () => {
    const newallusers = [...allusers]
    newallusers.push(user)
    setallusers(newallusers)

    console.log(newallusers)
    clearform()
  };
  const updateuser = () => {
    const updateuser = [...allusers];
    updateuser[ind] = user;
    setallusers(updateuser);
    clearform()
    edited(false)
  };
  const clearform = () => {
    name({
      fname: "",
      lname: "",
      email: ""
    })


  }
  const handleDelete = (i) => {
    const deletee = allusers.filter((usr, index) => {
      return index != i

    })
    setallusers(deletee)


  }
  const handleEdit = (i) => {
    edited(true)
    setind(i)
    name(allusers[i])
  }
  return (
    
    <div>
      <h1 style={{marginLeft:"250PX", color:"RED"}}> FORM USING FORM AND TABLE COMPONENTS </h1>
      <Forms user={user} handlecange={handlecange} isedit={isedit} adduser={adduser} updateuser={updateuser} />
      <Table allusers={allusers} adduser={adduser} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  )
};
export default Parent
