import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, deleteUserAction, updateUserAction } from "../Store/StudentsSlice";

const StudentDetails = () => {
  const { students } = useSelector((state) => state.students);
  const [student, setStudent] = useState({ id: "", name: "", age: "", email: "" });
  const [index, setIndex] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newStudent = { ...student };
    newStudent[e.target.name] = e.target.value;
    setStudent(newStudent);
  };

  const clearForm = () => {
    setStudent({ id: "", name: "", age: "", email: "" });
  };

  const handleAddUser = () => {
    dispatch(addUserAction(student));
    clearForm();
  };

  const handleEdit = (usr, i) => {
    setStudent(usr);
    setIndex(i);
  };

  const handleUpdateUser = () => {
    dispatch(updateUserAction({ index, student }));
    clearForm();
    setIndex(null);
  };

  const handleDelete = (index) => {
    dispatch(deleteUserAction({ index }));
  };

  return (
    <div>
      <form>
        <label htmlFor="">ID</label>
        <input type="text" name="id" value={student.id} onChange={handleChange} /><br />
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={student.name} onChange={handleChange} /><br />
        <label htmlFor="">Age</label>
        <input type="text" name="age" value={student.age} onChange={handleChange} /><br />
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={student.email} onChange={handleChange} /><br />
        {index === null ? (
          <button type="button" onClick={handleAddUser}>
            Add Student
          </button>
        ) : (
          <button type="button" onClick={handleUpdateUser}>
            Update Student
          </button>
        )}
      </form>
      <table border={1} style={{ width: "80%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((usr, i) => (
            <tr key={i}>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.age}</td>
              <td>{usr.email}</td>
              <td>
                <button onClick={() => handleEdit(usr, i)}>Edit Student</button>
              </td>
              <td>
                <button onClick={() => handleDelete(i)}>Delete Student</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
