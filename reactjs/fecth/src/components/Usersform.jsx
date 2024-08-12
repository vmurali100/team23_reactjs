import React from 'react'

const Usersform = ({users ,handlecange,create,isedit,update}) => {
    return (
        <div>
            <form>
                <div classNameName="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" 
                    name="Name"
                    value={users.Name} 
                    id="Name"
                    onChange={handlecange} />
                       </div>
                <div className="mb-3">
                    <label className="form-label">Rollno</label>
                    <input type="number" value={users.rollno}
                   name='rollno' 
                   id="rollno"
                   onChange={handlecange}  />
                </div>
                <div className="mb-3 form-check">
                    <label className="form-label">email</label>

                    <input type='email' name='email'id="email" onChange={handlecange}   value={users.email}/>

                </div>
                {isedit ? <button type="button" className="btn btn-primary"  onClick={update}>update</button>
         :<button type="button" className="btn btn-primary"  onClick={create}>Submit</button>
                }
               
            </form>
        </div>
    )
}

export default Usersform
