import React, { useState } from 'react'
import First from './frist'
import { Userinfo } from './usercomponent';

const Main = () => {
  const [value, setvalue] = useState("this is maian function!!!");
  const [values, setvalues] = useState({
    fanme:"vishal",
    lname:"mg"
  });

  return (

    <div id="main">
     
      <Userinfo.Provider value={values}>
        <First value={value} />
      </Userinfo.Provider>

    </div>
  )
}

export default Main
