import React from 'react'
import One from './one'
import { Stucomponent } from './get'

const Start = () => {
    const [student, setstu] = ([
        "vishal", 32, "csm"
    ])
    return <div id="start">
        <Stucomponent.Provider value={student}>
            <One student={student} />
        </Stucomponent.Provider>


    </div>
}

export default Start
