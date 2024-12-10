import React, { useState } from 'react'
import Main from './main';


const Middle = ({ render }) => {
    const [color,setColor]= useState("blue")
    const changecolor = () => {
        setColor(prevColor => (prevColor === 'blue' ? 'red' : 'blue'));
      };
    return   <div>
     
       

            {render(color, changecolor)}
        </div>
    
}

export default Middle
