import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, resetCount } from "../counterSlice";

const CounterComp = ()=> {
    // const counterDetails = useSelector((state)=>{
    //     return state.cunter
    // });
    const {count} = useSelector((state)=>state.cunter); 

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementCount())
    }

    const handleDecrement = () => {
        dispatch(decrementCount())
    }

    const hadleResect = () => {
        dispatch(resetCount())
    }

    
    
    return (
        <div>
            <button onClick={handleIncrement}>Incremnt Count</button>
            <button onClick={handleDecrement}>Decrement count</button>
            <button onClick={hadleResect}>Resect count</button>
            <h2>counter Value is :{count}</h2> 
        </div> 
    )
}

export default CounterComp;