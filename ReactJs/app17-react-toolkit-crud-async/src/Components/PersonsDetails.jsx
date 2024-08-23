import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonAction, createPersonsAsync, deletePersonAction, deletePersonsAsync, getAllPersonsAsync, updatePersonAction, updatePersonsAsync, } from "../Store/PersonsSlice";

const PersonsDetails = () => {
    const { persons } = useSelector((state) => state.persons);
    const [person, setPerson] = useState({ id: "", fname: "", lname: "", email: "" });
    const [index, setIndex] = useState(null);

    const handleChange = (e) => {
        const newPerson = { ...person };
        newPerson[e.target.name] = e.target.value;
        setPerson(newPerson);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPersonsAsync());
    }, []);

    const handleDelete = (prsn) => {
        dispatch(deletePersonsAsync(prsn));
    };
    const clearForm = () => {
        setPerson({ id: "", fname: "", lname: "", email: "" });
    };

    const handleAddPerson = () => {
        dispatch(createPersonsAsync(person));
        clearForm();
    };

    const handleEdit = (prsn, i) => {
        setPerson(prsn);
        setIndex(i);
    };

    const handleUpdatePerson = () => {
        dispatch(updatePersonsAsync(person));
        clearForm();
        setIndex(null);
    };
    return (
        <div>
            <form>
                <label htmlFor="">ID</label>
                <input
                    type="text"
                    name="id"
                    value={person.id}
                    onChange={handleChange}
                />{" "} <br />
                <label htmlFor="">First Name</label>
                <input
                    type="text"
                    name="fname"
                    value={person.fname}
                    onChange={handleChange}
                />{" "} <br />
                <label htmlFor="">Last Name</label>
                <input
                    type="text"
                    name="fname"
                    value={person.lname}
                    onChange={handleChange}
                />{" "} <br />
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                />{" "} <br />
                {index === null ? (
                    <button type="button" onClick={handleAddPerson}>
                        Add User
                    </button>
                ) : (
                    <button type="button" onClick={handleUpdatePerson}>
                        Update User
                    </button>
                )}
            </form>
            <table border={1} style={{ width: "80%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((prsn, i) => (
                        <tr key={i}>
                            <td>{prsn.id}</td>
                            <td>{prsn.fname}</td>
                            <td>{prsn.lname}</td>
                            <td>{prsn.email}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        handleEdit(prsn, i);
                                    }}
                                > Edit Person
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        handleDelete(prsn);
                                    }}
                                > Delete Person
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonsDetails;