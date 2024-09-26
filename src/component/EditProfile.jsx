import React, { useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera } from '@fortawesome/free-solid-svg-icons';
export const EditProfile = (props) => {
  const getData = localStorage.getItem("user");
  const parsedData = JSON.parse(getData);
  const uploadRef = useRef()
  const [click, setClick] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [defaultClick, setDefault] = useState(true)
  const [inputLength,  setLength] = useState(false)

  console.log(parsedData)
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

  const clickEdit = () =>{
    uploadRef.current.click()
  }
  return (
    <>
      <Modal show={props.show} onHide={props.hide} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <div className='modal-body-container'>
          <div className='modal-body-wrap'>
            <div className='profile-image-wrap'>
              <div className='profile-image'><div className='default-image'><FontAwesomeIcon icon={faUser}/></div></div>
              <div className='edit-user' onClick={clickEdit}><FontAwesomeIcon icon={faCamera}/></div>
              <div className='select-edit'><input ref={uploadRef} type="file" accept='image/*'/></div>
            </div>
            <form action="" className='modal-form'>
              <div>
                <div className={click ? 'modal-default' : 'modal-login'} onMouseDown={clickDefault}>
                  <div className='modal-label'>First Name</div>
                  <input className='modal-input' type="text" name="fname" id="" defaultValue={parsedData.fname}/>
                </div>

                <div className={second ? 'modal-default' : 'modal-login'} onMouseDown={clickSecond}>
                  <div className='modal-label'>Last Name</div>
                  <input className='modal-input' type="text" name="lname" id="" defaultValue={parsedData.lname}/>
                </div>

                <div className={third ? 'modal-default' : 'modal-login'} onMouseDown={clickThird}>
                  <div className='modal-label'>Username</div>
                  <input className='modal-input' type="text" name="uname" id="" defaultValue={parsedData.uname}/>
                </div>
                <div className='edit-button'><button className='l-bt-edit' type='submit'>Save changes</button></div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
