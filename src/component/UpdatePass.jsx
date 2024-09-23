import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
export const UpdatePass = () => {
    const [eye, setEye] = useState(false)
    const [eyeSlash, setEyeSlash] = useState(true)

    const [newEye, setNewEye] = useState(false)
    const [newEyeSlash, setNewEyeSlash] = useState(true)

    const clickEye = () => {
        setEye(!eye)
        setEyeSlash(!eyeSlash)
    }

    const clickNewEye = () => {
        setNewEye(!newEye)
        setNewEyeSlash(!newEyeSlash)
    }

    return (
        <div className='login-container'>
            <div className='login-header'></div>
            <form action="" className='add-wrap'>
                <div>
                    <div className='login'>
                        <input className='login-input' type={eye ? 'text' : 'password'} name="fname" id="" placeholder='Current Password' />
                        {eye && <div className='lock-icon' onClick={clickEye}><FontAwesomeIcon icon={faEye} /></div>}
                        {eyeSlash && <div className='lock-icon' onClick={clickEye}><FontAwesomeIcon icon={faEyeSlash} /></div>}
                    </div>
                    <div className='login'>
                        <input className='login-input' type={newEye ? 'text' : 'password'} name="lname" id="" placeholder='New Password' />
                        {newEye && <div className='lock-icon' onClick={clickNewEye}><FontAwesomeIcon icon={faEye} /></div>}
                        {newEyeSlash && <div className='lock-icon' onClick={clickNewEye}><FontAwesomeIcon icon={faEyeSlash} /></div>}
                    </div>
                    <div className='login'><input className='login-input' type="text" name="uname" id="" placeholder='Confirm New Password' /></div>
                    <div className='login-button'><button className='l-bt-2' type='submit'>Update Password</button></div>
                </div>
            </form>
        </div>
    )
}
