import React from 'react'
import { Route, Routes } from 'react-router-dom'
import loginForm from './loginForm';
import loginCreate from './loginCreate';
import loginPasswordLost from './loginPasswordLost';
import loginPasswordReset from './loginPasswordReset';


const Login = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<loginForm /> } />
        <Route path="/cria" element={<loginCreate /> } />
        <Route path="/perdeu" element={<loginPasswordLost /> } />
        <Route path="/resetar" element={<loginPasswordReset /> } />
      </Routes>
    </div>
  )
}

export default Login