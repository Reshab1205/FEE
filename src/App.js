import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Dashboard from './Components/Dashboard/Dashboard'
import Navbar from './Components/Pages/LandingPage'
import FormExample from './Components/Pages/LandingPage'
import TextLinkExample from './Components/Pages/LandingPage'
import Cricket from './Components/Test/Cricket'
import Reducer from './Components/Hooks/useReducer'

import { Provider } from 'react-redux'
import store from './Components/Redux/store'
import Counter from './Components/Redux/Counter'
import CounterControls from './Components/Redux/CounterControls'


const App = () => {

  return (
    <Provider store={store}>
    <>
      {/* <Router>
        <Routes>
          <Route path='/' element={<TextLinkExample />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>


        </Routes>
      </Router> */}
      <div className='App'>
        {/* <Cricket /> */}
        {/* <Reducer /> */}

        <Counter />
        <CounterControls />

      </div>

    </>
    </Provider>
  )
}

export default App