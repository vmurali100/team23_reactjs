import React, { useState } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

const ParentComponent = () => {
    const [person, setPerson] = useState({
        fname: "",
        lname: "",
        age: "",
        email: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    const [allPersons, setAllPersons] = useState([]);
    const [index, setIndex] = useState(null);
    const [isValid, setIsValid] = useState(null);

    const validateForm = () => {
        let check = false
        for (let a in person) {
            if (a !== "email") {
                if (person[a] === "") {
                    check = true;
                }
            } else {
                var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                if (pattern.test(person[a]) == false) {
                    check = true;
                }
            }
        }
        check ? setIsValid(false) : setIsValid(true);
    }

    const handleChange = (e) => {
        const newPerson = { ...person };
        newPerson[e.target.name] = e.target.value;
        setPerson(newPerson);
        validateForm()
    };
    const updatePerson = () => {
        const newAllPersons = [...allPersons];
        newAllPersons[index] = person;
        setAllPersons(newAllPersons);
        clearForm();
        setIsEdit(false);
    };
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
            email: "",
        });
    };
    const handleEdit = (i) => {
        setIsEdit(true);
        setIndex(i);
        setPerson(allPersons[i]);
    };
    const deletePerson = (i) => {
        const newFilteredPersons = allPersons.filter((usr, index) => {
            return index !== i;
        });
        setAllPersons(newFilteredPersons);
    };
    return (
        <div>
            <FormComponent
                person={person}
                handleChange={handleChange}
                isEdit={isEdit}
                updatePerson={updatePerson}
                addPerson={addPerson}
                isValid={isValid}
                validateForm={validateForm}
            />
            <hr />
            <TableComponent
                allPersons={allPersons}
                handleEdit={handleEdit}
                deletePerson={deletePerson}
            />
        </div>
    );
};

export default ParentComponent;