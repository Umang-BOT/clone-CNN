
import React from 'react'
import Login from './Componenets/Login'
import Singin from './Componenets/Singin'
import Navbar from './Componenets/Navbar'
import Main from './Componenets/Main'
import { Routes,Route } from 'react-router-dom'
import Open from './Componenets/Open'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Singin/>}/>
      <Route path="/Open" element={<Open/>}/>
    </Routes>
    </>
  )
}

export default App