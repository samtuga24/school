import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import icon from '../icons/icon.jpg'
export const Usernav = () => {

  const getData = localStorage.getItem("user");
  const parsedData = JSON.parse(getData);
  const IMG_URL = "http://localhost:8080/display/pass/" + parsedData.imageName
  const logout = () => {
    localStorage.removeItem("user");
};
  return (
    <div className='nav-container'>
        <div className='nav-logo'><img src={icon} alt="" /></div>
        <div className='nav-name'>Adu Gyamfi Memorial School</div>
        {/* <FontAwesomeIcon icon={faCircleUser}/> */}
        <div className='nav-icon'>{parsedData.imageName ? <img src={IMG_URL} alt="" /> : <FontAwesomeIcon icon={faUser}/>}</div>
        <div className='nav-list'>{parsedData.uname}</div>
        <Link to='../' className='log-out' >
          <div className='log-out' onClick={logout}><FontAwesomeIcon icon={faPowerOff}/></div>
        </Link>
    </div>
  )
}
