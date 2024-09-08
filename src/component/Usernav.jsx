import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import icon from '../icons/icon.jpg'
export const Usernav = () => {
  const getData = localStorage.getItem("user");
  const parsedData = JSON.parse(getData);
  const logout = () => {
    localStorage.removeItem("user");
};
  return (
    <div className='nav-container'>
        <div className='nav-logo'><img src={icon} alt="" /></div>
        <div className='nav-icon'><FontAwesomeIcon icon={faCircleUser}/></div>
        <div className='nav-list'>{parsedData.uname}</div>
        <Link to='../' className='log-out' >
          <div className='log-out' onClick={logout}><FontAwesomeIcon icon={faPowerOff}/></div>
        </Link>
    </div>
  )
}
