import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
export const UpdatePass = () => {
    const getData = localStorage.getItem("user");
    const parsedData = JSON.parse(getData);
    const [eye, setEye] = useState(false)
    const [eyeSlash, setEyeSlash] = useState(true)

    const [newEye, setNewEye] = useState(false)
    const [newEyeSlash, setNewEyeSlash] = useState(true)

    const [form, setForm] = useState({
        current: "",
        newPass: "",
        confirm: ""
    });

    const onUpdateForm = e => {
        const newFormState = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(newFormState);

    }
    const clickEye = () => {
        setEye(!eye)
        setEyeSlash(!eyeSlash)
    }

    const clickNewEye = () => {
        setNewEye(!newEye)
        setNewEyeSlash(!newEyeSlash)
    }


    const submitForm = (e) => {
        e.preventDefault();
        const checkCurrent = form.current;
        const checkNew = form.newPass;
        const checkConfirm = form.confirm;

        let currentLength;
        let newLength;
        let confirmLength;
        let match;
        if (checkCurrent.trim().length == 0) {
            currentLength = false;
            alert("please enter current password")
        } else {

            currentLength = true;
        }

        if (currentLength) {
            if (checkNew.trim().length == 0) {
                newLength = false;
                alert("please enter new password")
            } else {
                newLength = true;
            }
        }
        if (newLength) {
            if (checkConfirm.trim().length == 0) {
                confirmLength = false;
                alert("please confirm new password")
            } else {
                confirmLength = true;
            }
        }

        if(confirmLength){
            if(checkNew !=checkConfirm ){
                match = false;
                alert("passwords do not match")
            }else{
                match = true;
            }
        }
        if(currentLength && newLength && confirmLength && match){
            let formData = new FormData();
            formData.append("password",form.current)
            formData.append("newPass",form.newPass)
            axios.patch(`http://localhost:8080/update-password/${parsedData.uname}`, formData)
                .then((response)=>{
                    alert(response.data.body)
                }).catch((error)=> console.log(error))
        }
    }
    return (
        <div className='login-container'>
            <div className='login-header'></div>
            <form action="" className='add-wrap'>
                <div>
                    <div className='login'>
                        <input className='login-input' type={eye ? 'text' : 'password'} name="current" id="" placeholder='Current Password' value={form.current} onChange={onUpdateForm} />
                        {eye && <div className='lock-icon' onClick={clickEye}><FontAwesomeIcon icon={faEye} /></div>}
                        {eyeSlash && <div className='lock-icon' onClick={clickEye}><FontAwesomeIcon icon={faEyeSlash} /></div>}
                    </div>
                    <div className='login'>
                        <input className='login-input' type={newEye ? 'text' : 'password'} name="newPass" id="" placeholder='New Password' value={form.newPass} onChange={onUpdateForm} />
                        {newEye && <div className='lock-icon' onClick={clickNewEye}><FontAwesomeIcon icon={faEye} /></div>}
                        {newEyeSlash && <div className='lock-icon' onClick={clickNewEye}><FontAwesomeIcon icon={faEyeSlash} /></div>}
                    </div>
                    <div className='login'><input className='login-input' type={newEye ? 'text' : 'password'} name="confirm" id="" placeholder='Confirm New Password' value={form.confirm} onChange={onUpdateForm} /></div>
                    <div className='login-button'><button className='l-bt-2' onClick={submitForm}>Update Password</button></div>
                </div>
            </form>
        </div>
    )
}
