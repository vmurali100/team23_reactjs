import React, { useState } from "react";

const CreateForm = () => {
    const [person, setPerson] = useState({
        fname: "",
        lname: "",
        age: "",
        email: ""
    });
    const [allPersons, setAllPersons] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [index,setIndex] = useState(null)
    const handleChange = (e) => {
        const newPerson = { ...person };
        newPerson[e.target.name] = e.target.value;
        setPerson(newPerson)
    }
    const addPerson = () => {
        const newAllPersons = [...allPersons];
        newAllPersons.push(person);
        setAllPersons(newAllPersons);
        clearForm();
    };
    const clearForm = () => {
        setPerson({
            fname: "",
            lname: "",
            age: "",
            email: ""
        })
    }
    const deletePerson = (i) => {
        const newfilteredPersons = allPersons.filter((usr, index) => {
            return index !== i
        })
        setAllPersons(newfilteredPersons);
    }
    const handleEdit=(i)=>{
        setIsEdit(true);
        setIndex(i);
        setPerson(allPersons[i])
    }
    const updatePerson=()=>{
        const newAllPersons = [...allPersons];
        newAllPersons[index] = person;
        setAllPersons(newAllPersons);
        clearForm();
        setIsEdit(false);
    }
    return (
        <div>
            <form>
                <label htmlFor="">First Name :</label>
                <input type="text" name="fname" value={person.fname} onChange={handleChange} /> <br />
                <label htmlFor="">Last Name :</label>
                <input type="text" name="lname" value={person.lname} onChange={handleChange} /> <br />
                <label htmlFor="">Age :</label>
                <input type="text" name="age" value={person.age} onChange={handleChange} /> <br />
                <label htmlFor="">Email :</label>
                <input type="text" name="email" value={person.email} onChange={handleChange} /> <br />


                {isEdit ? <button type="button" onClick={updatePerson}>Update Person</button> :
                    <button type="button" onClick={addPerson}>Add Person</button>}
            </form>

            <hr />
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
    )
}

export default CreateForm