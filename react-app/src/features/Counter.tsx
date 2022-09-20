import { useDispatch, useSelector } from 'react-redux';
import { CounterState } from './../redux/counterSlice';
import {increment, decrement, reset, incrementByAmount} from './../redux/counterSlice'
import { useState } from 'react';

const Counter = () => {
    const count  = useSelector( (state : any) => state.counter.value );
  console.log("count",count)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }
    return (<>
    <section>
        <div>Counter</div>
        <h1>The count is: {count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
         <input type="number" value={incrementAmount} onChange={(e)=>setIncrementAmount(parseInt(e.target.value))}/>
        <div>
            <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
        </div>
    </section>
    
    </>
        
    )
}

export default Counter