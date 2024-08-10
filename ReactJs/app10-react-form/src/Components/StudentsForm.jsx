import React from "react";

const StudentsForm = ({ student, handleChange, createUser, isEdit,updateStudent }) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" value={student.fname} name="fname" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" value={student.lname} name="lname" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={student.email} name="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="email" className="form-control" value={student.password} name="password" onChange={handleChange} />
                </div>
                {isEdit ? <button type="button" className="btn btn-primary" onClick={updateStudent}>UpDate</button> :
                    <button type="button" className="btn btn-primary" onClick={createUser}>Submit</button>}


            </form>
        </div>
    )
};

export default StudentsForm;