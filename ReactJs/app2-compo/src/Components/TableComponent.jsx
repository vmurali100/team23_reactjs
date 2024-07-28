import React from "react";

const TableComponent = ({ allPersons,handleEdit,deletePerson }) => {
  return (
    <div>
      <h2>Welcome to Table Component !!</h2>
      <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allPersons.map((usr, i) => {
                        return <tr key={i}>
                            <td>{usr.fname}</td>
                            <td>{usr.lname}</td>
                            <td>{usr.age}</td>
                            <td>{usr.email}</td>
                            <td>
                                <button onClick={()=>{handleEdit(i)}}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => { deletePerson(i) }}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
    </div>
  );
};

export default TableComponent;