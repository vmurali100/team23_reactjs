import React, { useState } from "react";
import PersonsForm from "./PersonsForm";
import PersonsTable from "./PersonsTable";

const Persons = () => {
    const [person,setPerson] = useState({
        fname:"",
        lname:"",
        email:""
    });
    return (
        <div>
            <h2 className="text-center">Welcome to Persons Component..!!</h2>
            <hr />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <PersonsForm person={person}/>
                    </div>
                    <div class="col">
                        <PersonsTable />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Persons;