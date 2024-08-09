import React, { Component } from 'react';

export class UserClassLocalServerCRUD extends Component {
    constructor() {
        super();
        this.state = {
            singleUser: {
                fname: "",
                lname: ""
            },
            allUsers: [],
            index: null,
        };
    }

    componentDidMount() {
        // Fetch all users from the server
        fetch('http://localhost:3000/classUsers')
            .then(response => response.json())
            .then(data => this.setState({ allUsers: data }))
            .catch(error => console.error('Error fetching users:', error));
    }

    handleDelete = (i) => {
        const userToDelete = this.state.allUsers[i];

        fetch(`http://localhost:3000/classUsers/${userToDelete.id}`, {
            method: 'DELETE',
        })
            .then(() => {
                const newAllUsers = this.state.allUsers.filter((usr, index) => i !== index);
                this.setState({ allUsers: newAllUsers });
            })
            .catch(error => console.error('Error deleting user:', error));
    }

    handlechange = (e) => {
        const copyState = { ...this.state };
        const copiedObject = { ...this.state.singleUser };
        copiedObject[e.target.name] = e.target.value;
        copyState.singleUser = copiedObject;
        this.setState(copyState);
    };

    handleSubmit = () => {
        fetch('http://localhost:3000/classUsers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.singleUser),
        })
            .then(response => response.json())
            .then(newUser => {
                const copyState = { ...this.state };
                copyState.allUsers.push(newUser);
                this.setState(copyState);
                this.clearForm();
            })
            .catch(error => console.error('Error adding user:', error));
    };

    clearForm = () => {
        const copyState = { ...this.state };
        copyState.singleUser = {
            fname: "",
            lname: "",
        };
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
        const updatedUser = this.state.singleUser;

        fetch(`http://localhost:3000/classUsers/${updatedUser.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser),
        })
            .then(() => {
                const copyState = { ...this.state };
                copyState.allUsers[this.state.index] = updatedUser;
                this.setState(copyState);
                this.clearForm();
            })
            .catch(error => console.error('Error updating user:', error));
    };

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={this.state.singleUser.fname} onChange={this.handlechange} /><br />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" value={this.state.singleUser.lname} onChange={this.handlechange} /><br />

                    {this.state.index === null ?
                        (<button type="button" onClick={this.handleSubmit}>Add User</button>) :
                        (<button type="button" onClick={this.handleUpate}>Update User</button>)
                    }
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
                                    <td><button onClick={() => this.editUser(usr, i)}>Edit</button></td>
                                    <td><button onClick={() => this.handleDelete(i)}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
