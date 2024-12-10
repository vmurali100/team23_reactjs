import React from 'react'
import { useEffect,useState } from 'react'

const Form = () => {
    const [main, setmain] = useState({
        name: "",
        username: "",
        email: "",
        Phone: "",
        password: "",
        confirmpassword: "",
        gender:""

    })
    const [allusers, setallusers] = useState([])
    const [isedit, setisedit] = useState(false)
    useEffect(()=>{
        read()
    },[])
    const handlecange = (e) => {
        const newmain = { ...main }
        newmain[e.target.name] = e.target.value
        setmain(newmain)


    }
   
    const create = async () => {
        const response = await fetch("http://localhost:3001/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(main)
        })

        read()
        clear()
    }
    const read = async () => {

        const response = await (await fetch("http://localhost:3001/data")).json();
        setallusers(response)



    }
    const edit = (usr) => {
        console.log(usr)
        setmain(usr);
        setisedit(true)
    }
    const update = async (usr) => {
        const response = await fetch("http://localhost:3001/data" + usr.id, {
            method: "PUT",
            body: JSON.stringify(main),
            headers: {
                "Content-Type": "application.json",

            }
        });
        setisedit(false)
        clear()
        read()
    }
    const deluser = async (usr) => {
        //console.log(usr)
        const response = await fetch("http://localhost:3001/data/" + usr.id, {
            method: "DELETE"
        })
        read()
    }
    const clear = () => {
        setmain({
            name: "",
            username: "",
            email: "",
            Phone: "",
            password: "",
            confirmpassword: ""
        })


    }
    return (
        <div>
            <form action="">
                <label>fullname</label>
                <input type='text '
                    name='name' id='name' value={main.name} onChange={handlecange} placeholder='Enter Your Name' />
                <hr />
                <label>Username</label>
                <input type='text ' id='username' name='username' value={main.username} onChange={handlecange} placeholder='Enter Your Username' />
                <hr />
                <label>Email</label>
                <input type='email ' id='email' name='email' value={main.email} onChange={handlecange} placeholder='Enter Your Email' />
                <hr />

                <label>Phone number</label>
                <input type='number ' id='Phone' name='Phone' value={main.Phone} onChange={handlecange} placeholder='Enter Your number' />
                <hr />

                <label>Password</label>
                <input type='Password ' id='password' name='password' value={main.password} onChange={handlecange} placeholder='Enter Your Password' />
                <hr />

                <label>Confirm Password</label>
                <input type='text ' id='confirmpassword' name='confirmpassword' value={main.confirmpassword} onChange={handlecange} placeholder='Enter Your Name' />
                <hr />
                <label>Gender</label>
                <input type="radio" name='gender'onChange={handlecange} value='male' />MAle
                <input type="radio" name='gender' onChange={handlecange} value='female' />FemAle

                <input type="radio" name='gender'onChange={handlecange} value='male' />prefer not to say<br />
                {isedit ? <button type='button' onClick={update}

                    style={{ padding: '20px', marginTop: '10px', borderRadius: '30px', backgroundColor: 'orange', }}>
                    UPDATE
                </button> : <button type='button' onClick={create}

                    style={{ padding: '20px', marginTop: '10px', borderRadius: '30px', backgroundColor: 'skyblue', }}>
                    REGISTER
                </button>}

            </form>

            <table className="table" border={1} style={{padding:'10px'}}>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th>password</th>
                        <th>confirmpassword</th>
                        <th>Gender</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {allusers.map((usr) => {
                        return <tr key={usr.id}>
                            <td>{usr.Name}</td>
                            <td>{usr.username}</td>
                            <td>{usr.email}</td>
                            <td>{usr.password}</td>
                            <td>{usr.confirmpassword}</td>
                             <td></td>
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

export default Form
