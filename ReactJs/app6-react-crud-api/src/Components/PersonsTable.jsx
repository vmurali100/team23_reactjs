import React from "react";

const PersonsTable = ({ allPersons, deletePerson, editPerson }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allPersons.map((usr,i) => {
            return <tr key={i}>
              <td>{usr.fname}</td>
              <td>{usr.lname}</td>
              <td>{usr.email}</td>
              <td>
                <button className="btn btn-primary" onClick={() => { editPerson(usr) }}>Edit</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => { deletePerson(usr) }}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
};

export default PersonsTable;