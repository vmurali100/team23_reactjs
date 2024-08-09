import { Component } from "react";

export class Details extends Component() {

    constructor() {
        super();
        this.state = {

            firstuser: {
                fname: "",
                lname: "",
                age: "",
            },
            users: [
                { fname: "ram", lname: "krishna", age: 32 },
                { fname: "vishal", lname: "m.g.", age: 21 },
                { fname: "sam", lname: "singh", age: 22 }

            ],
            index: null,

        }
    }
    handleDelete = (i) => {
        const copiedState = { ...this.state };
        const newAllUsers = this.state.users.filter((usr, index) => {
            return i !== index;
        });
        copiedState.users = newAllUsers;
        this.setState(copiedState);
    };

    handleChange = (e) => {
        const copiedState = { ...this.state };
        const copiedObject = { ...this.state.firstuser };
        copiedObject[e.target.name] = e.target.value;
        copiedState.firstuser = copiedObject;
        this.setState(copiedState);
    };

    handleSubmit = () => {
        const copiedState = { ...this.state };
        copiedState.users.push(this.state.firstuser);
        this.setState(copiedState);
        this.clearForm();
    };

    clearForm = () => {
        const copiedState = { ...this.state };
        copiedState.firstuser = {
            fname: "",
            lname: "",
            age: ""
        };
        copiedState.index = null;
        this.setState(copiedState);
    };

    editUser = (usr, i) => {
        const copiedState = { ...this.state };
        copiedState.firstuser = usr;
        copiedState.index = i;
        this.setState(copiedState);
    };

    handleUpdate = () => {
        const copiedState = { ...this.state };
        copiedState.users[this.state.index] = this.state.firstuser;
        this.setState(copiedState);
        this.clearForm();
    };
    render() {
        //const { users } = this.state

        return (
            <div>

                <form >
                    <label htmlFor="">Firstname</label>
                    <input type="text" name="fname" onChange={this.handleChange} value={this.state.firstuser.fname} />{" "}<br></br>
                    <label htmlFor="">Lastname</label>
                    <input type="text" name="lname" onChange={this.handleChange} value={this.state.firstuser.lname} />{" "}<br></br>


                    <label htmlFor="">age</label>
                    <input type="number" name="age" onChange={this.handleChange} value={this.state.firstuser.age} />{" "}<br></br>
                    {this.state.index === null ? (
                        <button type="button" onClick={this.handleSubmit} >
                            Add User
                        </button>
                    ) : (
                        <button type="button" onClick={this.handleUpdate}>
                            Update User
                        </button>
                    )}
                </form>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>age</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((usr, i) => {
                            return (
                                <tr key={i}>
                                    <td>{usr.fname}</td>
                                    <td>{usr.lname}</td>
                                    <td>{usr.age}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.editUser(usr, i);
                                        }} >Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            this.handleDelete(i);
                                        }} >delete</button>
                                    </td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>

            </div>

        )
    }
}