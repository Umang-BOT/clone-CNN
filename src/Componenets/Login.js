import React, { useState } from 'react'
import logo from '../Assets/networking.jpg'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/Setup'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
    const login=async()=>{
        try{
await signInWithEmailAndPassword(auth,email,password)
        }
        catch(err){
            console.log(err)
        }
        
    }
  return (
    <div className='bg-red-100 h-screen flex flex-col items-center justify-center'>
        <div className='bg-white p-8 rounded-lg w-4/12'>
            <img src={logo} className='w-20 h-26'/><h1>Log in to your CNN clone account</h1>
            <h1 className='mt-3'>Don't have an account?<Link to="/signin"><span className='underline'>Sign up</span></Link></h1>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" id="first_name" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Add" required />
            <input onChange={(e)=>setPassword(e.target.value)} type="text" id="first_name" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
            <button onChange={login} type="button" className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign in</button>
        </div>
    </div>
  )
}

export default Login