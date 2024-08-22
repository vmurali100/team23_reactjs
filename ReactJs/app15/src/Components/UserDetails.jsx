import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "../Store/UserSclice";

const UserDetails = () => {
    const { users } = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleDelete = (index) => {
        dispatch(deleteUserAction(index))
    }
    return (
        <div>
            <h1>User Details</h1>
            <table border={1} style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((usr, i) => <tr key={i}>
                        <td>{usr.title}</td>
                        <td>{usr.author}</td>
                        <td>{usr.year}</td>
                        <td>
                            <button >Edit User</button>
                        </td>
                        <td>
                            <button onClick={() => { handleDelete(i) }}>Deleted User</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UserDetails;