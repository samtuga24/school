import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../icons/icon.jpg'
export const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='nav-logo'><img src={icon} alt="" /></div>
        <div className='nav-name'>Adu Gyamfi Memorial School</div>
        <Link to='./create-user' className='nav-list-create'><div>Create Account</div></Link>
        <Link to='./login' className='nav-list'><div>Login</div></Link>
    </div>
  )
}
