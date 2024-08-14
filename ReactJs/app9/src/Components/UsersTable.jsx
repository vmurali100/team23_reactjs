import React from "react";

const UserTable = ({ allUsers, DeleteUser, EditUser }) => {
    return (
        <div>
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((usr, i) => (
                        <tr key={i}>
                            <td>{usr.Fullname}</td>
                            <td>{usr.Username}</td>
                            <td>{usr.Gmail}</td>
                            <td>{usr.PhoneNo}</td>
                            <td>{usr.PassWord}</td>
                            <td>{usr.ConfPassword}</td>
                            <td>{usr.gender}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => { EditUser(usr) }}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { DeleteUser(usr) }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
