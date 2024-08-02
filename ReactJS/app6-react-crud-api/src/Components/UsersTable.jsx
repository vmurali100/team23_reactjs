import React from "react";

const UsersTable = ({ allUsers,deleteUser,editUser }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th >First</th>
            <th >Last</th>
            <th >Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((usr,i) => {
            return (
              <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.email}</td>
                <td>
                  <button className="btn btn-primary" onClick={()=>{editUser(usr)}}>Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={()=>{deleteUser(usr)}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
