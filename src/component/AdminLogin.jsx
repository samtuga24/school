import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const AdminLogin = () => {
    const LOGIN_API = "http://localhost:8080/api/auth/login";
    let navigate = useNavigate();
    const [form, setForm] = useState({
        uname: "",
        password: ""
    });

    const onUpdateForm = e => {
        const newFormState = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(newFormState);

    }

    const [uname, setUname] = useState(false)
    const [pass, setPassword] = useState(false)

    const submitForm = e => {
        e.preventDefault();
        const checkUname = form.uname;
        const checkPassword = form.password;

        let unameLength;
        let passwordLength;
        if (checkUname.trim().length == 0) {
            unameLength = false;
            alert("please enter username")
        } else {

            unameLength = true;
        }

        if (unameLength) {
            if (checkPassword.trim().length == 0) {
                passwordLength = false;
                alert("please enter password")
            } else {
                passwordLength = true;
            }
        }

        if (unameLength && passwordLength) {
            axios
                .post(LOGIN_API, form)
                .then((response) => {
                    if (response.data.token) {
                        localStorage.setItem("user", JSON.stringify(response.data))
                        if (response.data.roles.includes("Admin")) {

                            navigate("../dash")
                            window.location.reload()
                        } else if (response.data.roles.includes("Student")) {
                            navigate("/user")
                            window.location.reload()
                        } else if (response.data.roles.includes("inactive")) {

                        }
                    }
                })
                .catch((error) => {
                    alert(error)
                })
        }
    }
    return (
        <div className='login-container'>
            <form action="" onSubmit={submitForm} className='login-wrap'>
                <div>
                    <div className='login'><input className='login-input' type="text" name="uname" value={form.uname} onChange={onUpdateForm} id="" placeholder='username' /></div>
                    <div className='login'><input className='login-input' type="password" name="password" value={form.password} onChange={onUpdateForm} id="" placeholder='password' /></div>
                    <div className='login-button'><button className='l-bt' type='submit'>Login</button></div>
                </div>
            </form>
        </div>
    )
}
