import React from 'react'
import { connect} from 'react-redux'
import { increment, decrement } from './actions'


const CounterControls = ({increment,decrement}) => {
  return (
    <div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>

    </div>
  )
}

export default connect(null, {increment, decrement})(CounterControls)