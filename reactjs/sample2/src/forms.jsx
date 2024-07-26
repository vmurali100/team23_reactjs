import { useState } from "react";

var Forms = () => {
    const [user, name] = useState({
        fname: "",
        lname: "",
        email: ""
    })
    const [allusers, setallusers] = useState([])
    const [isedit,edited]=useState(false)
    const [ind, setind] =useState(null)
    const handlecange = (e) => {
        const newuser = { ...user };
        newuser[e.target.name] = e.target.value;
        name(newuser)


    }
    const adduser = () => {
        const newallusers = [...allusers]
        newallusers.push(user)
        setallusers(newallusers)

        console.log(newallusers)
        clearform()
    };
    const clearform = () => {
        name({
            fname: "",
            lname: "",
            email: ""
        })
    }
    const handleDelete=(i)=>{
        const deletee= allusers.filter((usr,index)=>{
            return index!=i

        })
        setallusers(deletee)
     

    }
    const handleEdit=(i)=>{
        edited(true)
        setind (i)
        name(allusers[i])
    }
    const updateuser=()=>{
        const updateuser=[...allusers];
        updateuser[ind]=user;
        setallusers(updateuser);
        clearform()
        edited(false)
    }
    
    return <div>
        <form >
            <label >Name</label>
            <input type="text" name="fname" value={user.fname} onChange={handlecange} /><br />
            <label >lName</label>
            <input type="text" name="lname" value={user.lname} onChange={handlecange} /><br />
            <label >email</label>
            <input type="email" name="email" value={user.email} onChange={handlecange} /><br />
             {isedit ? <button type="button" onClick={updateuser}>updateuser</button> : <button  type="button" onClick={adduser}>adduser</button>}
        </form>
        <hr />
        <table border={1}  style={{width:"700px",padding:"10px"}}>
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    
                </tr>
            </thead>
            <tbody>
                {allusers.map((usr,i) => {
                    return <tr key={i}>
                     
                        <td></td>
                        <td>{usr.fname}</td>
                        <td>{usr.lname}</td>

                        <td>{usr.email}</td>
                        <td><button onClick={()=>{handleEdit(i)}}>EDIT</button></td>
                        <td><button onClick={()=>{handleDelete(i)}}>DELETE</button></td>

                    </tr>
})}
           </tbody>
        </table>
    </div>
};
export default Forms