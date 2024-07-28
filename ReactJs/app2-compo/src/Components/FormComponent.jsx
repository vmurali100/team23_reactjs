import React from "react";

const FormComponent = ({ person, handleChange, isEdit, updatePerson, addPerson, isValid, validateForm }) => {
    return (
        <div>
            <h2>Welcome to Form Component !!</h2>

            <form>
                <label htmlFor="">First Name :</label>
                <input type="text" name="fname" value={person.fname} onChange={handleChange} onKeyUp={validateForm} /> <br />
                <label htmlFor="">Last Name :</label>
                <input type="text" name="lname" value={person.lname} onChange={handleChange} onKeyUp={validateForm} /> <br />
                <label htmlFor="">Age :</label>
                <input type="text" name="age" value={person.age} onChange={handleChange} onKeyUp={validateForm} /> <br />
                <label htmlFor="">Email :</label>
                <input type="text" name="email" value={person.email} onChange={handleChange} onKeyUp={validateForm} /> <br />


                {isEdit ? (<button type="button" onClick={updatePerson}>Update Person</button>) :
                    (<button type="button" onClick={addPerson} disabled={!isValid} >Add Person</button>)}
            </form>
        </div>
    );
};

export default FormComponent;