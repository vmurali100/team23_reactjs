import React from "react";


const UserTable = ({ allUsers, DeleteUser, EditUser }) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((usr, i) => {
                        return <tr key={i}>
                            <td>{usr.Fname}</td>
                            <td>{usr.Lname}</td>
                            <td>{usr.Gmail}</td>
                            <td><button className="btn btn-primary" onClick={()=>{EditUser(usr)}}>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={()=>{DeleteUser(usr)}}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;