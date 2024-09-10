import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleDown, faAngleUp, faUserPlus, faEye, faUsers, faGrip } from '@fortawesome/free-solid-svg-icons'
import { AddJob } from './AddJob'
import { Usernav } from './Usernav'
import { Applicant } from './Applicant'
import { ViewApplicants } from './ViewApplicants'
import { ListedJobs } from './ListedJobs'

export const Dashboard = () => {
    const [angleDown, setAngleDown] = useState(false)
    const [angleUp, setAngleUp] = useState(true);
    const [postJob, setPostJob] = useState(false)
    const [addStaff, setStaff] = useState(false)
    const [addStudent, setStudent] = useState(false)
    const [viewList, setList] = useState(false)
    const [applicant, setApplicant] = useState(false)

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
        setStaff(false)
        setStudent(false)
        setList(false)
        setApplicant(false)
    }


    const staffClick = () => {
        setPostJob(false)
        setStaff(true)
        setStudent(false)
        setList(false)
        setApplicant(false)
    }

    const studentClick = () => {
        setPostJob(false)
        setStaff(false)
        setStudent(true)
        setList(false)
        setApplicant(false)
    }

    const listClick = () => {
        setPostJob(false)
        setStaff(false)
        setStudent(false)
        setList(true)
        setApplicant(false)
    }

    const applicantClick = () => {
        setPostJob(false)
        setStaff(false)
        setStudent(false)
        setList(false)
        setApplicant(true)
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
                                    <div className='side-nav-icon'><FontAwesomeIcon icon={faEye} /></div>
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
                            </div>
                        }
                    </div>
                    <div className='dash-content'>
                        {postJob && <AddJob />}
                        {addStudent && <Applicant />}
                        {viewList && <ListedJobs/>}
                        {applicant && <ViewApplicants/>}
                        
                    </div>
                </div>
            </div>
        </>

    )
}
