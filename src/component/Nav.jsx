import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='nav-logo'></div>
        <div className='nav-name'></div>
        <Link to='./create-user' className='nav-list-create'><div>Create Account</div></Link>
        <Link to='./login' className='nav-list'><div>Login</div></Link>
    </div>
  )
}
