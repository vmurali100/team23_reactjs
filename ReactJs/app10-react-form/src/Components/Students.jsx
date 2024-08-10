import React, { useEffect, useState } from "react";
import StudentsForm from "./StudentsForm";
import StudentsTable from "./StudentsTable";

const Students = () => {
    const [student, setStudent] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });
    const [allStudents, setAllStudents] = useState([])
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        readUser()
    }, [])
    const handleChange = (e) => {
        const newStudent = { ...student };
        newStudent[e.target.name] = e.target.value;
        setStudent(newStudent)
    }
    const createUser = async () => {
        const response = await fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        });
        clearForm();
        readUser();
    };
    const readUser = async () => {
        const response = await (await fetch("http://localhost:3000/students")).json();
        setAllStudents(response)
    };
    const editStudent = (usr) => {
        setStudent(usr)
        setIsEdit(true)
    }
    const updateStudent = async () => {
        const response = await fetch("http://localhost:3000/students/" + student.id, {
            method: "PUT",
            body: JSON.stringify(student),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setIsEdit(false);
        clearForm();
        readUser();
    };
    const deleteStudent = async (usr) => {
        const response = await fetch("http://localhost:3000/students/" + usr.id, {
            method: "DELETE"
        })
        readUser()
    };

    const clearForm = () => {
        setStudent({
            fname: "",
            lname: "",
            email: "",
            password: ""
        })
    }
    return (
        <div>
            <h2 className="text-center">Registration Form</h2>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <StudentsForm student={student} handleChange={handleChange} createUser={createUser} isEdit={isEdit} updateStudent={updateStudent} />
                    </div>
                    <div className="col">
                        <StudentsTable allStudents={allStudents} deleteStudent={deleteStudent} editStudent={editStudent} />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Students;