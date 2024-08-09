import { useState } from "react"

export const UserObject = () => {
    const ChangeMyObjectinfo = () => {
        setuserinfo({
            fname: "Ravi",
            lname: "Kumar",
            gmail: "shekark509@gmail.com"
        });
    }
    const [userinfo, setuserinfo] = useState({
        fname: "Gnana",
        lname: "Shekar"
    });

    return <div>
        <button onClick={ChangeMyObjectinfo}>Change my object</button>

        <ul>
            {Object.values(userinfo).map((val, i) => {
                return <li key={i}>{val}</li>
            })}
        </ul>

        {/* <ul>
            <li>{userinfo.fname}</li>
            <li>{userinfo.lname}</li>
        </ul> */}
    </div>
}