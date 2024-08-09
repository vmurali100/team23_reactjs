import React from 'react';


const UserForm = ({ User, handleChange, CreateUser, isEdit, UpdateUser }) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputFname" className="form-label">Fname</label>
                    <input type="text" className="form-control" name='Fname' value={User.Fname} onChange={handleChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLname" className="form-label">Lname</label>
                    <input type="text" className="form-control" name='Lname' value={User.Lname} onChange={handleChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='Gmail' value={User.Gmail} onChange={handleChange} />

                </div>

                {isEdit ?
                    (<button type="button" className="btn btn-primary" onClick={UpdateUser}>Update</button>) :
                    (<button type="button" className="btn btn-primary" onClick={CreateUser}>Submit</button>)
                }


            </form>
        </div>
    )
}

export default UserForm;