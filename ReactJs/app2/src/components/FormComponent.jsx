import React from "react";

const FormComponent = ({ User, handleChange, isEdit, UpdateUser, AddUser, handleEdit, AllUsers, index, ClearForms, ValidateFrom, isValid }) => {
    return (
        <div>
            <h1>Welcome to Form component</h1>
            <form>
                <label htmlFor="">First Name</label>
                <input type="text" name="fname" value={User.fname} onChange={handleChange} onKeyUp={ValidateFrom} /><br />
                <label htmlFor="">Lname Name</label>
                <input type="text" name="lname" value={User.lname} onChange={handleChange} onKeyUp={ValidateFrom} /><br />
                <label htmlFor="">Gmail</label>
                <input type="email" name="gmail" value={User.gmail} onChange={handleChange} onKeyUp={ValidateFrom} /><br />
                <hr />
                {isEdit ?
                    (<button type="button" onClick={UpdateUser}>Update</button>) :
                    (<button type="button" onClick={AddUser} disabled={!isValid}>AddUser</button>)
                }
            </form>
        </div>
    )
}

export default FormComponent;