import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './counterSlice'

export default function Counter() {
  const [incrementAmount,setIncrementAmount]=useState(0)
  const count = useSelector((state )=>{
  console.log("global state from redux",state);
  return state.counter.value
  });
  const dispatch = useDispatch()
  console.log("Count::",count);
  const handleOnIncrementClick=()=>{
    dispatch(increment())
  }
  const handleOnDecrementClick=()=>{
    dispatch(decrement())
  }

  return (
    <div>
      <div>
      <span>Counter Value : {count}</span> <br/>
        <button
          aria-label="Increment value"
          onClick={handleOnIncrementClick}
        >
          Increment
        </button>
    
        <button
          aria-label="Decrement value"
          onClick={handleOnDecrementClick}
        >
          Decrement
        </button> <br/>
        <input
        aria-label="set increment Amount"
        value={incrementAmount}
        onChange={(event)=> setIncrementAmount(event.target.value)}
        ></input>
        <button
          onClick={()=>
            dispatch(
              incrementByAmount(Number(incrementAmount)||0)
            )}
        >
          Increment by Amount
        </button>

      </div>
    </div>
  )
}