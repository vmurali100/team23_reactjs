import React, { useEffect, useState } from "react";
import PersonsForm from "./PersonsForm";
import PersonsTable from "./PersonsTable";

const Persons = () => {
    const [person, setPerson] = useState({
        fname: "",
        lname: "",
        email: ""
    });
    const [allPersons, setAllPersons] = useState([])
    const [isEdit,setIsEdit] = useState(false);
    useEffect(() => {
        readUser()
    }, [])
    const handleChange = (e) => {
        const newPerson = { ...person };
        newPerson[e.target.name] = e.target.value;
        setPerson(newPerson)
    }
    const createUser = async () => {
        const response = await fetch("http://localhost:3000/persons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        });
        clearForm();
        readUser();
    };
    const readUser = async () => {
        const response = await (await fetch("http://localhost:3000/persons")).json();
        setAllPersons(response)
    };
    const editPerson=(usr)=>{
        setPerson(usr)
        setIsEdit(true)
    }
    const updatePerson = async() => { 
        const response = await fetch("http://localhost:3000/persons/"+person.id,{
            method:"PUT",
            body:JSON.stringify(person),
            headers:{
                "Content-Type":"application/json",
            },
        });
        setIsEdit(false);
        clearForm();
        readUser();
    };
    const deletePerson = async(usr) => {
        const response = await fetch("http://localhost:3000/persons/"+usr.id,{
            method:"DELETE"
        })
        readUser()
    };

    const clearForm = () => {
        setPerson({
            fname: "",
            lname: "",
            email: ""
        })
    }
    return (
        <div>
            <h2 className="text-center">Welcome to Persons Component..!!</h2>
            <hr />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <PersonsForm person={person} handleChange={handleChange} createUser={createUser} isEdit={isEdit} updatePerson={updatePerson}/>
                    </div>
                    <div class="col">
                        <PersonsTable allPersons={allPersons} deletePerson={deletePerson} editPerson={editPerson} />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Persons;