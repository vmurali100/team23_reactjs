import { useState } from "react";

export const UserArray = () => {
    const [users, setArrayusers] = useState(["Kran", "Kumar", "Ravi", "Kumar"]);

    const handleUsernames = () => {
        setArrayusers(["Naveen", "Shankar", "Praveen", "Mahash", 'Madave']);
    }


    return (
        <div>
            <button onClick={handleUsernames}>Change Array in Users</button>
            <ul>
                {users.map((usr) => {
                    return <li>{usr}</li>
                })}
            </ul>
        </div>
    )
}