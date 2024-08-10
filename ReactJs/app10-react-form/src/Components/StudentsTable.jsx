import React from "react";

const StudentsTable = ({ allStudents, deleteStudent, editStudent }) => {
  return (
    <div>
      <table className="table" border={2}>
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((usr,i) => {
            return <tr key={i}>
              <td>{usr.fname}</td>
              <td>{usr.lname}</td>
              <td>{usr.email}</td>
              <td>{usr.password}</td>
              <td>
                <button className="btn btn-primary" onClick={() => { editStudent(usr) }}>Edit</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => { deleteStudent(usr) }}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
};

export default StudentsTable;