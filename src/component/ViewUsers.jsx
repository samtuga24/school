import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBan, faEye, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
export const ViewUsers = () => {
    const [view, setView] = useState([])
    const [username, setUsername] = useState()
    const [show, setShow] = useState(false)
    const VIEW_USERS = "http://localhost:8080/view-all"
    useEffect(() => {
        axios.get(VIEW_USERS)
            .then(response => {
                setView(response.data, null, 2)
            }).catch((error) => {
                console.log(error)
            })
    }, []);
    console.log(view)

    const action = (e,email) => {
        e.stopPropagation()
        setUsername(email)
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    const updateClick = (uname) => {
        axios.patch(`http://localhost:8080/status/${uname}`)
        
            .then((response)=>{
                if(response.data.body.includes("updated"))
                console.log(response.data.body)
            }).catch((error)=>{
                alert(error)
            })
            
    }
    return (
        <div className='view-container'>
            <div className='login-header'>Users</div>
            <div className='result-table'>
                <table className='table-width'>
                    <tr>
                        <th className='t-data'>First Name</th>
                        <th className='t-data'>Last Name</th>
                        <th className='t-data'>Username</th>
                        <th className='t-data'>Role</th>
                        <th className='t-data'>Phone Number</th>
                        <th className='t-data'>Status</th>
                        <th className='t-data'>Actions</th>
                    </tr>
                    {view.map((item, index) => {
                        return (
                            <tr className='table-row' key={index}>
                                <td className='t-data'>{item.fname}</td>
                                <td className='t-data'>{item.lname}</td>
                                <td className='t-data'>{item.uname}</td>
                                <td className='t-data'>{item.roles[0].name}</td>
                                <td className='t-data'>{item.phoneNumber}</td>
                                <td className='t-data'>Active</td>
                                <td className='t-data-1'>
                                    <div className='view-action'>
                                        <div className='view-print'><FontAwesomeIcon icon={faEye} className='trash'/>View</div>
                                        <div className='view-delete' onClick={(e)=>action(e,item.uname)}><FontAwesomeIcon icon={faBan} className='trash'/>Deactivate</div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}

                </table>
            </div>

            <Modal show={show} onHide={handleClose} className=''>
                <Modal.Header closeButton>
                    <Modal.Title>Deactivate User</Modal.Title>
                </Modal.Header>
                <div className='modal-body-container'>
                    <div className='modal-body-wrap'>
                        <div className='deactivate'>Are you sure you want to deactivate this user?</div>
                        <div className='deactivate-buttons'>
                            <div className='deactivate-cancel' onClick={()=>setShow(false)}><FontAwesomeIcon icon={faXmark} className='x-mark'/>Cancel</div>
                            <div className='deactivate-yes' onClick={updateClick(username)}><FontAwesomeIcon icon={faCheck} className='x-mark'/>Yes</div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
