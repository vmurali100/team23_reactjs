import { Component } from "react";

export class UsersClass extends Component {
    constructor() {
        super();
        this.state = {
            singleUser: {
                fname: "",
                lname: "",
            },
            allUsers: [
                { fname: "ram", lname: "krishna" },
                { fname: "Kiran", lname: "Kumar" },
                { fname: "Ravi", lname: "Kanth" },
            ],
            index: null,
        };
    }

    handleDelete = async (usr) => {
        console.log(usr)
        const response = await fetch("http://localhost:3001/user" + usr.fname, {
            method: "DELETE"
        })

    }

    handleChange = (e) => {
        const copiedState = { ...this.state };
        const copiedObject = { ...this.state.singleUser };
        copiedObject[e.target.name] = e.target.value;
        copiedState.singleUser = copiedObject;
        this.setState(copiedState);
    };

    handleSubmit = () => {
        const copiedState = { ...this.state };
        copiedState.allUsers.push(this.state.singleUser);
        this.setState(copiedState);
        this.clearForm();
    };
    create = async (usr) => {
        const response = await fetch("http://localhost:3001/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.allUsers)
        })

        this.read()
        this.clearForm()
    }
    read = async () => {

        const response = await (await fetch("http://localhost:3001/user")).json();
        this.setState(response)



    }

    clearForm = () => {
        const copiedState = { ...this.state };
        copiedState.singleUser = {
            fname: "",
            lname: "",
        };
        copiedState.index = null;
        this.setState(copiedState);
    };

    editUser = (usr, i) => {
        const copiedState = { ...this.state };
        copiedState.singleUser = usr;
        copiedState.index = i;
        this.setState(copiedState);
    };

    handleUpdate = async (usr) => {
        const response = await fetch("http://localhost:3001/user", {
            method: "PUT",
            body: JSON.stringify(this.state.allUsers),
            headers: {
                "Content-Type": "application.json",

            }

        })
        this.clearForm()

        this.read()

    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">First Name :</label>
                    <input
                        type="text"
                        name="fname"
                        value={this.state.singleUser.fname}
                        onChange={this.handleChange}
                    />{" "}
                    <br />
                    <label htmlFor="">Last Name :</label>
                    <input
                        type="text"
                        name="lname"
                        value={this.state.singleUser.lname}
                        onChange={this.handleChange}
                    />{" "}
                    <br />
                    {this.state.index === null ? (
                        <button type="button" onClick={this.handleSubmit()}>
                            Add User
                        </button>
                    ) : (
                        <button type="button" onClick={this.handleUpdate()}>
                            Update User
                        </button>
                    )}
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
                        {this.state.allUsers.map((usr, i) => {
                            return (
                                <tr key={i}>
                                    <td>{usr.fname}</td>
                                    <td>{usr.lname}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.editUser(usr, i);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.handleDelete(i);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}