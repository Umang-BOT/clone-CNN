import React from 'react'
import Navbar from './Navbar'
import Home from './Home'

const Menubar = (prop) => {

  return (
    <div>
        <h1 className='p-2 ml-3'>{prop.news[0]?.title} | {prop.news[1]?.title} | {prop.news[2]?.title}.</h1>
    </div>
  )
}

export default Menubar