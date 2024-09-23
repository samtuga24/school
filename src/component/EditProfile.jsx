import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export const EditProfile = (props) => {
  const [click, setClick] = useState(false)
  const [defaultClick, setDefault] = useState(true)
  const [inputLength,  setLength] = useState(false)
  const clickDefault = () => {
    setClick(!click)
    setDefault(!defaultClick)
  }
  return (
    <>
      <Modal show={props.show} onHide={props.hide} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <div className='modal-body-container'>
          <div className='mdal-body-wrap'>
            <div className='profile-image-wrap'>
              <div className='profile-image'></div>
              <div className='edit-user'>Edit</div>
            </div>
            <form action="" className='modal-form'>
              <div>
                <div className={click ? 'modal-default' : 'modal-login'} onMouseDown={clickDefault}>
                  <div className='modal-label'>First Name</div>
                  <input className='modal-input' type="text" name="fname" id=""/>
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
