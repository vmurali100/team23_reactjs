import React, { useState } from 'react'


const Base = (Bases) => {
    const Newcomponent = () => {
        const [count, setcount] = useState(0);
        const [color,setcolor]=useState("click");
        const incrementval = () => {
            setcount(count + 1);
        }
        const decrementval = () => {
            setcount(count - 1);
        }
       
        const changecolor=()=>{
            setcolor("blue")
        }
      
  return (

        <Bases
         changecolor={changecolor} 
         color={color} 

       incrementval={incrementval} 
        count={count}
        decrementval={decrementval} />
      
  
  )
}
return Newcomponent
}
export default Base
