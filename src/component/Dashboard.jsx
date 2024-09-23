import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleDown, faAngleUp, faMailBulk, faEye, faUsers, faGrip, faGears, faUserPlus, faLock, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { AddJob } from './AddJob'
import { Usernav } from './Usernav'
import { Applicant } from './Applicant'
import { ViewApplicants } from './ViewApplicants'
import { ListedJobs } from './ListedJobs'
import { Footer } from './Footer'
import { ViewUsers } from './ViewUsers'
import { UpdatePass } from './UpdatePass'
import { EditProfile } from './EditProfile'

export const Dashboard = () => {
    const [angleDown, setAngleDown] = useState(false)
    const [angleUp, setAngleUp] = useState(true);
    const [manageDown, setManageDown] = useState(false)
    const [manageUp, setManageUp] = useState(true);
    const [settingDown, setSettingDown] = useState(false)
    const [settingUp, setSettingUp] = useState(true);
    const [postJob, setPostJob] = useState(false)
    const [viewList, setList] = useState(false)
    const [applicant, setApplicant] = useState(false)
    const [addUser, setUser] = useState(false)
    const [viewUser, setViewUser] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [changePass, setChangePass] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }
    const settingClick = () => {
        setSettingDown(!settingDown)
        setSettingUp(!settingUp)
    }

    const settingDownClick = () => {
        setSettingDown(!settingDown)
        setSettingUp(!settingUp)
    }

    const manageClick = () => {
        setManageDown(!manageDown)
        setManageUp(!manageUp)
    }

    const manageDownClick = () => {
        setManageDown(!manageDown)
        setManageUp(!manageUp)
    }
    const downClick = () => {
        setAngleDown(!angleDown)
        setAngleUp(!angleUp)
    }

    const upClick = () => {
        setAngleDown(!angleDown)
        setAngleUp(!angleUp)
    }

    const postClick = () => {
        setPostJob(true)
        setUser(false)
        setList(false)
        setApplicant(false)
        setViewUser(false)
        setEditUser(false)
        setChangePass(false)
    }


    const userClick = () => {
        setPostJob(false)
        setUser(true)
        setList(false)
        setApplicant(false)
        setViewUser(false)
        setEditUser(false)
        setChangePass(false)
    }

    const passClick = () => {
        setPostJob(false)
        setUser(false)
        setList(false)
        setApplicant(false)
        setViewUser(false)
        setEditUser(false)
        setChangePass(true)
    }

    const profileClick = () => {
        setPostJob(false)
        setUser(false)
        setList(false)
        setApplicant(false)
        setViewUser(false)
        setEditUser(true)
        setChangePass(false)
        setShow(true)
    }


    const viewClick = () => {
        setPostJob(false)
        setUser(false)
        setList(false)
        setApplicant(false)
        setViewUser(true)
        setEditUser(false)
        setChangePass(false)
    }

    const listClick = () => {
        setPostJob(false)
        setUser(false)
        setList(true)
        setApplicant(false)
        setViewUser(false)
        setEditUser(false)
        setChangePass(false)
    }

    const applicantClick = () => {
        setPostJob(false)
        setUser(false)
        setList(false)
        setApplicant(true)
        setViewUser(false)
        setEditUser(false)
        setChangePass(false)
    }
    return (
        <>
            <Usernav />
            <div className='dashboard-container'>
                <div className='dashboard-wrap'>
                    <div className='side-nav'>
                        <div className='side-nav-item'>
                            <div className='side-nav-icon'><FontAwesomeIcon icon={faHouse} /></div>
                            <div className='side-nav-text-1'>Dashboard</div>
                        </div>

                        <div className='side-nav-item'>
                            <div className='side-nav-icon'><FontAwesomeIcon icon={faGrip} /></div>
                            <div className='side-nav-text-2'>Resources</div>
                            {angleUp && <div className='side-nav-icon' onClick={downClick}><FontAwesomeIcon icon={faAngleDown} /></div>}
                            {angleDown && <div className='side-nav-icon-2' onClick={upClick}><FontAwesomeIcon icon={faAngleUp} /></div>}

                        </div>
                        {angleDown &&
                            <div className='item-list-wrap'>

                                <div className='item-list' onClick={postClick}>
                                    <div className='side-nav-icon'><FontAwesomeIcon icon={faMailBulk} /></div>
                                    <div className='side-nav-text-1'>Post Vacancy</div>
                                </div>
                                <div className='item-list' onClick={listClick}>
                                    <div className='side-nav-icon'><FontAwesomeIcon icon={faEye} /></div>
                                    <div className='side-nav-text-1'>View Listed Jobs</div>
                                </div>

                                <div className='item-list' onClick={applicantClick}>
                                    <div className='side-nav-icon'><FontAwesomeIcon icon={faUsers} /></div>
                                    <div className='side-nav-text-1'>Applicants</div>
                                </div>

                                <div className='side-nav-item'>
                                    <div className='side-nav-icon'><FontAwesomeIcon icon={faUsers} /></div>
                                    <div className='side-nav-text-2'>Manage Users</div>
                                    {manageUp && <div className='side-nav-icon' onClick={manageClick}><FontAwesomeIcon icon={faAngleDown} /></div>}
                                    {manageDown && <div className='side-nav-icon-2' onClick={manageDownClick}><FontAwesomeIcon icon={faAngleUp} /></div>}

                                </div>
                                {manageDown &&
                                    <>
                                        <div className='item-list' onClick={userClick}>
                                            <div className='side-nav-icon'><FontAwesomeIcon icon={faUserPlus} /></div>
                                            <div className='side-nav-text-1'>Add User</div>
                                        </div>
                                        <div className='item-list' onClick={viewClick}>
                                            <div className='side-nav-icon'><FontAwesomeIcon icon={faEye} /></div>
                                            <div className='side-nav-text-1'>View Users</div>
                                        </div>
                                    </>


                                }

                                <div className='side-nav-item'>
                                    <div className='side-nav-icon'><FontAwesomeIcon icon={faGears} /></div>
                                    <div className='side-nav-text-2'>Settings</div>
                                    {settingUp && <div className='side-nav-icon' onClick={settingClick}><FontAwesomeIcon icon={faAngleDown} /></div>}
                                    {settingDown && <div className='side-nav-icon-2' onClick={settingDownClick}><FontAwesomeIcon icon={faAngleUp} /></div>}

                                </div>
                                {settingDown &&
                                    <>
                                        <div className='item-list' onClick={profileClick}>
                                            <div className='side-nav-icon'><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <div className='side-nav-text-1'>Edit Profile</div>
                                        </div>
                                        <div className='item-list' onClick={passClick}>
                                            <div className='side-nav-icon'><FontAwesomeIcon icon={faLock} /></div>
                                            <div className='side-nav-text-1'>Change Password</div>
                                        </div>
                                    </>
                                }
                            </div>
                        }
                    </div>
                    <div className='dash-content'>
                        {postJob && <AddJob />}
                        {addUser && <Applicant />}
                        <EditProfile show={show} hide={handleClose}/>
                        {viewUser && <ViewUsers />}
                        {viewList && <ListedJobs />}
                        {changePass && <UpdatePass />}
                        {applicant && <ViewApplicants />}

                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
