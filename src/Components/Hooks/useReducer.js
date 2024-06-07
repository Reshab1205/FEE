import React, { useReducer } from 'react'


const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {count : state.count + 1}
        case 'DECREMENT' :
            return {count : state.count - 1}
        default :
        return state
    }
    
}

const Reducer = () => {

    const initialCounter = { count: 0};

    const [state, dispatch] = useReducer(counterReducer, initialCounter)
  return (
    <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type : 'INCREMENT'})} >Increase</button>
        <button onClick={() => dispatch({ type : 'DECREMENT'})} >Decrease</button>
    </div>
  )
}

export default Reducer