import React from 'react';

function UserForm() {
    const users = [
        {
          id: 1,
          name: 'Alice Smith',
          email: 'alice@example.com',
          password: 'alice123',
          gender: 'Female',
          subjects: ['HTML', 'CSS'],
          state: 'Karnataka',
          dob: '1990-01-15'
        },
        {
          id: 2,
          name: 'Bob Johnson',
          email: 'bob@example.com',
          password: 'bob456',
          gender: 'Male',
          subjects: ['JavaScript', 'React'],
          state: 'TamilNadu',
          dob: '1985-06-25'
        },
        {
          id: 3,
          name: 'Charlie Brown',
          email: 'charlie@example.com',
          password: 'charlie789',
          gender: 'Male',
          subjects: ['CSS', 'React'],
          state: 'Kerala',
          dob: '1992-11-30'
        }
    ];

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Subjects</th>
                        <th>State</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.subjects.join(', ')}</td>
                            <td>{user.state}</td>
                            <td>{user.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserForm;
