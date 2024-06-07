import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ count }) => {
  return (
    <div>Counter: {count}</div>
  )
}

const mapStateToProps = (state) => ({
    count: state.count,
})

export default connect(mapStateToProps)(Counter);