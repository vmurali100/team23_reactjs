import React from 'react'

const Userstable = ({ allusers, deluser,edit }) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Rollno</th>
                        <th scope="col">email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {allusers.map((usr) => {
                        return <tr>
                            <td>{usr.Name}</td>
                            <td>{usr.rollno}</td>
                            <td>{usr.email}</td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>{edit(usr)}}>Edit</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => {deluser(usr) }}>Delete</button>
                            </td>
                        </tr>


                    })}
                </tbody>

            </table>

        </div>
    )
}

export default Userstable
