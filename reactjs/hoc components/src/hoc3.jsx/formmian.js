import React, { useState } from 'react'


const Formmain = (Mains) => {
    const Newtable = () => {
        const [no, sestno] = useState({
           val: 0
    })
        const setnumbers = () => {
            for (let i in no) {
                sestno(i)
            }
        }
        const handlecange = (e) => {
            const newuser = { ...no };
            newuser[e.target.name] = e.target.value;
            sestno(newuser)


        }
        return (
            <Mains
                setnumbers={setnumbers}
                no={no}
                handlecange={handlecange}
            />
        )
    }

    return Newtable
}
export default Formmain
