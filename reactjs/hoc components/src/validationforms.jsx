import { useState } from "react";

var Forms = () => {
    const [user, name] = useState({
        fname: "",
        rollno: "",
        email: ""
    })
    const [allusers, setallusers] = useState([])
    const [isedit,edited]=useState(false)
    const [ind, setind] =useState(null)
    const [valid,setvalid] =useState(null);
    const validateform =()=>{
        let check=false;
        for (let a in user) {
            if (a != "email"){
                if (user[a]=== ""){
                    check =true;
                 }
            }else{
                var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if(pattern.test(user ==false)){
                    check=true
                }

            }
          
        }
        check ? setvalid(false) :setvalid(true)
        

    }
    const handlecange = (e) => {
        const newuser = { ...user };
        newuser[e.target.name] = e.target.value;
        name(newuser)
        validateform()


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
            <input type="text" name="fname" value={user.fname} onChange={handlecange} onKeyUp={validateform} /><br />
            <label >rollno</label>
            <input type="number" name="rollno" value={user.rollno} onChange={handlecange} onKeyUp={validateform}/><br />
            <label >email</label>
            <input type="email" name="email" value={user.email} onChange={handlecange} onKeyUp={validateform}/><br />
             {isedit ? <button type="button" onClick={updateuser}>updateuser</button> 
             : <button disabled={!valid} type="button" onClick={adduser}>adduser</button >}

        </form>
        <hr />
        <table border={1}  style={{width:"700px",padding:"10px"}}>
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>NAME</th>
                    <th>rollno</th>
                    <th>EMAIL</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    
                </tr>
            </thead>
            <tbody>
                {allusers.map((usr,i) => {
                    return <tr key={i}>
                     
                        <td>{i+1}</td>
                        <td>{usr.fname}</td>
                        <td>{usr.rollno}</td>

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