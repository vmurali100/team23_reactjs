import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addUserAction,
  deleteUserAction,
  getAllUsersAction,
  handleUpdateAction,
} from '../Store/action';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        fullName: "",
        email: "",
        password: "",
      },
      isEdit: false,
    };
  }

  handleChange = (e) => {
    const newUserInfo = { ...this.state.userInfo };
    newUserInfo[e.target.name] = e.target.value;
    this.setState({ userInfo: newUserInfo });
  };

  handleUpdate = async () => {
    await this.props.updateUser(this.state.userInfo);
    this.props.getAllUsers();
    this.clearForm();
  };

  addUser = async () => {
    await this.props.createUser(this.state.userInfo); 
    this.props.getAllUsers(); 
    this.clearForm();
  };

  handleDelete = async (usr) => {
    await this.props.deleteUser(usr);
    this.props.getAllUsers(); 
  };

  handleEditUser = (usr) => {
    this.setState({
      userInfo: usr,
      isEdit: true,
    });
  };

  render() {
    const { userInfo, isEdit } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="">Full Name : </label>
          <input
            type="text"
            value={userInfo.fullName}
            name="fullName"
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Email : </label>
          <input
            type="text"
            value={userInfo.email}
            name="email"
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Password : </label>
          <input
            type="text"
            value={userInfo.password}
            name="password"
            onChange={this.handleChange}
          />{" "}
          <br />
          {isEdit ? (
            <button type="button" onClick={this.handleUpdate}>
              Update User
            </button>
          ) : (
            <button type="button" onClick={this.addUser}>
              Add User
            </button>
          )}
        </form>

        <hr />

        <table border={1}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((usr, i) => (
              <tr key={i}>
                <td>{usr.fullName}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.id}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleEditUser(usr);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.handleDelete(usr);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  clearForm() {
    this.setState({
      userInfo: {
        fullName: "",
        email: "",
        password: "",
      },
      isEdit: false,
    });
  }
}

// To Access State
function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

// to dispatch Actions
function mapDispatchToProps(dispatch) {
  return {
    createUser: (user) => dispatch(addUserAction(user)),
    deleteUser: (user) => dispatch(deleteUserAction(user)),
    updateUser: (user) => dispatch(handleUpdateAction(user)),
    getAllUsers: () => dispatch(getAllUsersAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
