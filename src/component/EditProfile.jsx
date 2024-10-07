import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export const EditProfile = (props) => {
  const getData = localStorage.getItem("user");
  const parsedData = JSON.parse(getData);
  const uploadRef = useRef()
  const [click, setClick] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [defaultClick, setDefault] = useState(true)
  const [inputLength, setLength] = useState(false)
  const [length, setFileLength] = useState(false)
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const IMG_URL = "http://localhost:8080/display/pass/" + parsedData.imageName
  const fRef = useRef(null);


  const [form, setForm] = useState({
    fname: "",
    lname: "",
    uname: ""
  });

  const onUpdateForm = e => {
    const newFormState = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(newFormState);

  }

  const onChangePicture = e => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
        setFileLength(true)

      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const submitForm = e => {

    e.preventDefault();
    const checkFname = form.fname;
    const checkLname = form.lname;
    const checkUname = form.uname;

    let fnameLength;
    let lnameLength;
    let unameLength;

    if (checkFname.trim().length == 0) {
      fnameLength = false;
      fRef.current.focus()
    } else {
      fnameLength = true;
    }

    if (fnameLength) {
      if (checkLname.trim().length == 0) {
        lnameLength = false;

      } else {
        lnameLength = true;
      }
    }

    if (lnameLength) {
      if (checkUname.trim().length == 0) {
        unameLength = false;

      } else {
        unameLength = true;
      }
    }


      let formData = new FormData();
      formData.append("fname",form.fname)
      formData.append("lname",form.lname)
      formData.append("uname",form.uname)
      formData.append("passport",picture)
      axios
          .patch(`http://localhost:8080/update/${parsedData.uname}`, formData)
  
          .then((response) => {
            alert(response.data)
          })
          .catch((error) => {
              console.log(error)
          })

    
  }


  const clickDefault = () => {
    setClick(true)
    setDefault(false)
    setSecond(false)
    setThird(false)
  }

  const clickSecond = () => {
    setClick(false)
    setDefault(false)
    setSecond(true)
    setThird(false)
  }

  const clickThird = () => {
    setClick(false)
    setDefault(false)
    setSecond(false)
    setThird(true)
  }

  const clickEdit = () => {
    uploadRef.current.click()

  }

  return (
    <>
      <Modal show={props.show} onHide={props.hide} className='' onExit={() => setFileLength(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <div className='modal-body-container'>
          <div className='modal-body-wrap'>
            <div className='profile-image-wrap'>
              <div className='profile-image'>
                <div className='default-image'>
                  {length ? <img src={imgData} alt="" /> : parsedData.imageName ? <img src={IMG_URL} alt="" /> : <FontAwesomeIcon icon={faUser} />}

                </div>
              </div>
              <div className='edit-user' onClick={clickEdit}><FontAwesomeIcon icon={faCamera} /></div>
              <div className='select-edit'><input ref={uploadRef} type="file" accept='image/*' name='profile-image' onChange={onChangePicture} /></div>
            </div>
            <form action="" className='modal-form'>
              <div>
                <div ref={fRef} className={click ? 'modal-default' : 'modal-login'} onMouseDown={clickDefault}>
                  <div className='modal-label'>First Name</div>
                  <input className='modal-input' type="text" name="fname" onChange={onUpdateForm} id="" defaultValue={parsedData.fname} />
                </div>

                <div className={second ? 'modal-default' : 'modal-login'} onMouseDown={clickSecond}>
                  <div className='modal-label'>Last Name</div>
                  <input className='modal-input' type="text" name="lname" onChange={onUpdateForm} id="" defaultValue={parsedData.lname} />
                </div>

                <div className={third ? 'modal-default' : 'modal-login'} onMouseDown={clickThird}>
                  <div className='modal-label'>Username</div>
                  <input className='modal-input' type="text" name="uname" onChange={onUpdateForm} id="" defaultValue={parsedData.uname} />
                </div>
                <div className='edit-button'><button className='l-bt-edit' type='submit' onClick={(e) => submitForm(e)}>Save changes</button></div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
