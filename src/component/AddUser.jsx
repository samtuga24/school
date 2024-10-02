import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {
    const CREATE_ACCOUNT_API = "http://localhost:8080/add-admin";
    let navigate = useNavigate();
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        uname: "",
        password: "",
        phoneNumber: ""
    });

    const role = [{ "name": "Student" }]

    const submit = { ...form, roles: role }
    const finalSubmit = JSON.stringify(submit, null, 2)
    console.log(submit)

    const onUpdateForm = e => {
        const newFormState = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(newFormState);

    }

    const isValidNumber = (inputNumber) => {
        const number = ["024", "054", "055", "059", "020", "050", "027", "057", "026"];
        const compareNumber = inputNumber.slice(0, 3);
        return number.includes(compareNumber);

    }
    const submitForm = e => {
        e.preventDefault();
        const checkFname = form.fname;
        const checkLname = form.lname;
        const checkUname = form.uname;
        const checkPhone = form.phoneNumber;
        const checkPassword = form.password;

        let fnameLength;
        let lnameLength;
        let unameLength;
        let phoneLength;
        let validPhone;
        let passLength;
        if (checkFname.trim().length == 0) {
            fnameLength = false;
            alert("please enter first name")
        } else {

            fnameLength = true;
        }

        if (fnameLength) {
            if (checkLname.trim().length == 0) {
                lnameLength = false;
                alert("please enter last name")
            } else {
                lnameLength = true;
            }
        }

        if (lnameLength) {
            if (checkUname.trim().length == 0) {
                unameLength = false;
                alert("please enter username")
            } else {
                unameLength = true;
            }
        }

        if (unameLength) {
            if (checkPhone.trim().length == 0) {
                phoneLength = false;
                alert("please enter phone number")
            } else {
                phoneLength = true;
            }
        }

        if (phoneLength) {
            if (isValidNumber(checkPhone)) {
                validPhone = true;

            } else {
                validPhone = false;
                alert("please enter a valid phone number")
            }
        }

        if (validPhone) {
            if (checkPassword.trim().length == 0) {
                passLength = false;
                alert("please enter password")
            } else {
                passLength = true;
            }
        }

        if (fnameLength && lnameLength && unameLength && phoneLength && validPhone && passLength) {

            axios
                .post(CREATE_ACCOUNT_API, finalSubmit, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then((response) => {
                    if (response.data.includes("Admin account already exists")) {
                        alert("account taken")
                    } else {
                        alert(response.data)
                    }
                })
                .catch((error) => {
                    alert(error)
                })

        }
    }
    return (
        <div className='login-container'>
            <div className='login-header'>Add New User</div>
            <form action="" onSubmit={submitForm} className='add-wrap'>
                <div>
                    <div className='login'><input className='login-input' type="text" name="fname" id="" value={form.fname} onChange={onUpdateForm} placeholder='First Name' /></div>
                    <div className='login'><input className='login-input' type="text" name="lname" id="" value={form.lname} onChange={onUpdateForm} placeholder='Last Name' /></div>
                    <div className='login'><input className='login-input' type="text" name="uname" id="" value={form.uname} onChange={onUpdateForm} placeholder='Email' /></div>
                    <div className='login'><input className='login-input' type="text" name="phoneNumber" id="" value={form.phoneNumber} onChange={onUpdateForm} placeholder='Phone Number' /></div>
                    <div className='login'><input className='login-input' type="password" name="password" id="" value={form.password} onChange={onUpdateForm} placeholder='password' /></div>
                    <div className='login-button'><button className='l-bt-2' type='submit'>Create Account</button></div>
                </div>
            </form>
        </div>
    )
}
