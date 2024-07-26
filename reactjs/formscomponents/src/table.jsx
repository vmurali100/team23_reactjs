import React from 'react'

const Table = ({handleDelete,handleEdit,allusers}) => {
  return (
    <div>
       <table border={1}  style={{width:"700px",padding:"10px"}}>
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    
                </tr>
            </thead>
            <tbody>
                {allusers.map((usr,i) => {
                    return <tr key={i}>
                     
                        <td></td>
                        <td>{usr.fname}</td>
                        <td>{usr.lname}</td>

                        <td>{usr.email}</td>
                        <td><button onClick={()=>{handleEdit(i)}}>EDIT</button></td>
                        <td><button onClick={()=>{handleDelete(i)}}>DELETE</button></td>

                    </tr>
})}
           </tbody>
        </table>
    </div>
  )
}

export default Table
