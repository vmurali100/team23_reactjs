import React from "react";

const PersonsForm = ({ person, handleChange, createUser, isEdit,updatePerson }) => {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                    <input type="text" class="form-control" value={person.fname} name="fname" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                    <input type="text" class="form-control" value={person.lname} name="lname" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" value={person.email} name="email" onChange={handleChange} />
                </div>
                {isEdit ? <button type="button" class="btn btn-primary" onClick={updatePerson}>UpDate</button> :
                    <button type="button" class="btn btn-primary" onClick={createUser}>Submit</button>}


            </form>
        </div>
    )
};

export default PersonsForm;