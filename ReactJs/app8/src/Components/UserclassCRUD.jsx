import { Component } from 'react'


export class UserClassCRUD extends Component {
    constructor() {
        super();
        this.state = {
            singleUser: {
                fname: "",
                lname: ""
            },
            allUsers: [
                { fname: "Rama", lname: "Chandra" },
                { fname: "Ravi", lname: "Chandra" },
                { fname: "Mani", lname: "Kanta" },
            ],
            index: null,
        };
    }
    handleDelete = (i) => {
        const copyState = { ...this.state };
        const newAllUsers = this.state.allUsers.filter((usr, index) => {
            return i !== index;
        });
        copyState.allUsers = newAllUsers;
        this.setState(copyState);
    }

    handlechange = (e) => {
        const copyState = { ...this.state };
        const copiedObject = { ...this.state.singleUser };
        copiedObject[e.target.name] = e.target.value;
        copyState.singleUser = copiedObject;
        this.setState(copyState)
    };

    handleSubmit = () => {
        const copyState = { ...this.state };
        copyState.allUsers.push(this.state.singleUser)
        this.setState(copyState);
        this.clearForm()
    };

    clearForm = () => {
        const copyState = { ...this.state };
        copyState.singleUser = {
            fname: "",
            lname: "",
        }
        copyState.index = null;
        this.setState(copyState);
    };

    editUser = (usr, i) => {
        const copyState = { ...this.state };
        copyState.singleUser = usr;
        copyState.index = i;
        this.setState(copyState);
    };

    handleUpate = () => {
        const copyState = { ...this.state };
        copyState.allUsers[this.state.index] = this.state.singleUser;
        this.setState(copyState);
        this.clearForm();
    };

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">First Name</label>
                    <input type="text" name='fname' value={this.state.singleUser.fname} onChange={this.handlechange} /> <br />

                    <label htmlFor="">First Name</label>
                    <input type="text" name='lname' value={this.state.singleUser.lname} onChange={this.handlechange}      /> <br />

                    {this.state.index === null ?
                        (<button type='button' onClick={this.handleSubmit}>Add User</button>) :
                        (<button type='button' onClick={this.handleUpate}>Add User</button>)
                    };
                </form>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr, i)=>{
                            return (
                                <tr>
                                    <td>{usr.fname}</td>
                                    <td>{usr.lname}</td>
                                    <td><button onClick={()=>{this.editUser(usr, i)}}>Edit</button></td>
                                    <td><button onClick={()=>{this.handleDelete(i)}}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

