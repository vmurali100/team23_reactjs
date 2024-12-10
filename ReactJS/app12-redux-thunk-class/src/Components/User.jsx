import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addUserAction,
  deleteUserAction,
  getAllUsersAction,
  handleUpdateAction,
} from "../Store/actions";

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
    const newState = { ...this.state };
    const newUserInfo = { ...this.state.userInfo };
    newUserInfo[e.target.name] = e.target.value;
    newState.userInfo = newUserInfo;
    this.setState(newState);
  };

  handleUpdate = async () => {
    this.props.updateuser(this.state.userInfo);
    this.props.getAllUsers();
    this.clearForm();
  };

  addUser = async () => {
    this.props.getAllUsers();
    this.clearForm();
  };

  handleDelete = async (usr) => {
    this.props.deleteUser(usr);
  };
  handleEditUser = (usr) => {
    const newState = { ...this.state };
    newState.userInfo = usr;
    newState.isEdit = true;
    this.setState(newState);
  };
  render() {
    const { userInfo, isEdit } = this.state;
    const { handleChange, handleUpdate, addUser } = this;
    return (
      <div>
        <form>
          <label htmlFor="">Full Name : </label>
          <input
            type="text"
            value={userInfo.fullName}
            name="fullName"
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="">Email : </label>
          <input
            type="text"
            value={userInfo.email}
            name="email"
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="">Password : </label>
          <input
            type="text"
            value={userInfo.password}
            name="password"
            onChange={handleChange}
          />{" "}
          <br />
          {isEdit ? (
            <button type="button" onClick={handleUpdate}>
              Update User
            </button>
          ) : (
            <button type="button" onClick={addUser}>
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
    const newState = { ...this.state };
    newState.userInfo = {
      fullName: "",
      email: "",
      password: "",
    };
    newState.isEdit = false;
    this.setState(newState);
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
    updateuser: (user) => dispatch(handleUpdateAction(user)),
    getAllUsers: () => dispatch(getAllUsersAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
