import React, { useState } from 'react';
import RenderChild from './renderingchills';
import NewChildComp from './newChildComp';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import HoverCounterxd from './HoverConterxd';
import OnDoubleClick from './OnDoubleClick';
import OnInputChange from './OnInputEnter';
import OnInputmodified from './OnInputChange';

const RenderMain = () => {
    const [message, setmessage] = useState("Welcome to render props component Topic")
    const [person, setperson] = useState({
        fname: "Murali",
        lname: "Krishna"
    });
    const [users, setusers] = useState(["Siva", "Ramana", "Vijay", "Mohan"]);
    const createNewComp = () => {
        return <NewChildComp/>
    }
    return (
        <div>
            <h2>Wellcome to RenderMain component</h2>
            <Counter render={(count,setCount) => <ClickCounter count={count} handleClickCount={setCount}/>}/>
            <Counter render={(count,setCount) => <HoverCounterxd count={count} handleClickCount={setCount}/>}/>
            <Counter render={(count,setCount) => <OnDoubleClick count={count} handleClickCount={setCount}/>}/>
            <Counter render={(count,setCount) => <OnInputChange count={count} handleClickCount={setCount}/>}/>
            <Counter render={(count,setCount) => <OnInputmodified count={count} handleClickCount={setCount}/>}/>



            {/* <RenderChild message={message} person={person} users={users} createNewComp={createNewComp} /> */}
        </div>
    )
}

export default RenderMain;


