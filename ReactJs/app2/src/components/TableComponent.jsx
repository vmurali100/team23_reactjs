import React from "react";


const TableComponent = ({ AllUsers, handleEdit, DeleteUser }) => {
    return (
        <div>
            <h1>Welcome to Table component</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>gmail</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((usr, i) => {
                        return (
                            <tr key={i}>
                                <td>{usr.fname}</td>
                                <td>{usr.lname}</td>
                                <td>{usr.gmail}</td>
                                <td><button onClick={() => { handleEdit(i) }}>Edit</button></td>
                                <td><button onClick={() => { DeleteUser(i) }}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;