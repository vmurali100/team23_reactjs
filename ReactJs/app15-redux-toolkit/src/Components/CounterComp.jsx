import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, resetCount } from '../Store/Slices/counterSlice';

const CounterComp = () => {
    const {count} = useSelector((state)=>state.counter);
    const dispatch = useDispatch()
    const handleIncrement=()=>{
        dispatch(incrementCount())
    }
    const handleDecrement=()=>{
        dispatch(decrementCount())
    }
    const handleReset=()=>{
        dispatch(resetCount())
    }
  return (
    <div>
        <button onClick={handleIncrement}>Increment Count</button>
        <button onClick={handleDecrement}>Decrement Count</button>
        <button onClick={handleReset}>Reset Count</button>
      <h2>Counter Value is : {count}</h2>
    </div>
  )
}

export default CounterComp