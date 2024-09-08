import React from 'react'
import { Link } from 'react-router-dom'

export const UserLogin = () => {
  return (
    <div className='login-container'>
    <div className='login-wrap'>
        <div className='login'><input className='login-input' type="text" name="" id="" placeholder='username'/></div>
        <div className='login'><input className='login-input' type="password" name="" id="" placeholder='password'/></div>
        <Link to='../user' className='login-button'><button className='l-bt'>Login</button></Link>
    </div>
</div>
  )
}
