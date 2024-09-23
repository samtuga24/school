import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilter, faMagnifyingGlass, faCediSign, faPenToSquare, faEye, faGears, faAngleDown, faAngleUp, faLock } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Usernav } from './Usernav'
import axios from 'axios'
import { Apply } from './Apply'
import { JobList } from './JobList'
import { Footer } from './Footer'
export const UserPage = () => {
    const getData = localStorage.getItem("user");
    const parsedData = JSON.parse(getData);
    const GET_JOBS_API = "http://localhost:8080/get-jobs"

    const GET_USER_API = "http://localhost:8080/get-applicants/" + parsedData.uname
    const [jobs, setJobs] = useState([])
    const [dash, setDash] = useState(true)
    const [update, setUpdate] = useState(false)
    const [view, setView] = useState(false)
    const [job, setJob] = useState(false)
    const [apply, setApply] = useState()
    const [client, setClient] = useState()
    const [settingDown, setSettingDown] = useState(false)
    const [settingUp, setSettingUp] = useState(true);
    const [postJob, setPostJob] = useState(false)
    const [addStaff, setStaff] = useState(false)
    const [addStudent, setStudent] = useState(false)
    const [viewList, setList] = useState(false)
    const [applicant, setApplicant] = useState(false)

    const settingClick = () => {
        setSettingDown(!settingDown)
        setSettingUp(!settingUp)
    }

    const settingDownClick = () => {
        setSettingDown(!settingDown)
        setSettingUp(!settingUp)
    }
    const dashClick = () => {
        setDash(true)
        setUpdate(false)
        setView(false)
        setJob(false)
    }

    const updateClick = () => {
        setDash(false)
        setUpdate(true)
        setView(false)
        setJob(false)
    }

    // const viewClick = () => {
    //     setDash(false)
    //     setUpdate(false)
    //     setView(true)
    //     setJob(false)

    // }

    const jobClick = () => {
        setDash(false)
        setUpdate(false)
        setView(false)
        setJob(true)
    }




    const [showApply, setShowApply] = useState(false)
    useEffect(() => {
        axios.get(GET_JOBS_API)
            .then(response => {
                setJobs(response.data, null, 2)


            }).catch((error) => {
                console.log(error)
            })
    }, [jobs]);

    useEffect(() => {
        axios.get(GET_USER_API)
            .then(response => {
                setClient(response.data, null, 2)


            }).catch((error) => {
                console.log(error)
            })
    }, [client]);
    const GET_CV_API = "http://localhost:8080/apply/Capture.PNG"

    const clickViewCV = () => {
        setDash(false)
        setUpdate(false)
        setView(true)
        setJob(false)
        axios.get(GET_CV_API)
            .then(response => {
                console.log(response.data, null, 2)


            }).catch((error) => {
                console.log(error)
            })
    }
    const updateJob = () => {
        axios
            .post(`http://localhost:8080/update-job/${parsedData.uname}`, apply, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                alert(JSON.stringify(response.data))


            }).catch((error) => {
                alert(error)
            })
    }

    return (
        <>
            <Usernav />
            <div className='user-page-container'>
                <div className='user-page-nav'>
                    <div className='side-nav-item' onClick={dashClick}>
                        <div className='side-nav-icon'><FontAwesomeIcon icon={faHouse} /></div>
                        <div className='side-nav-text-1'>Dashboard</div>
                    </div>

                    <div className='side-nav-item' onClick={jobClick}>
                        <div className='side-nav-icon'><FontAwesomeIcon icon={faBell} /></div>
                        <div className='side-nav-text-1'>Jobs</div>
                    </div>

                    <div className='side-nav-item' onClick={updateClick}>
                        <div className='side-nav-icon'><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div className='side-nav-text-1'>Update CV</div>
                    </div>

                    <div className='side-nav-item'>
                        <div className='side-nav-icon'><FontAwesomeIcon icon={faGears} /></div>
                        <div className='side-nav-text-2'>Settings</div>
                        {settingUp && <div className='side-nav-icon' onClick={settingClick}><FontAwesomeIcon icon={faAngleDown} /></div>}
                        {settingDown && <div className='side-nav-icon-2' onClick={settingDownClick}><FontAwesomeIcon icon={faAngleUp} /></div>}

                    </div>
                    {settingUp &&
                        <>
                            <div className='side-nav-item' onClick={updateClick}>
                                <div className='side-nav-icon'><FontAwesomeIcon icon={faPenToSquare} /></div>
                                <div className='side-nav-text-1'>Edit Profile</div>
                            </div>
                            <div className='side-nav-item' onClick={updateClick}>
                                <div className='side-nav-icon'><FontAwesomeIcon icon={faLock} /></div>
                                <div className='side-nav-text-1'>Change Password</div>
                            </div>
                        </>
                    }
                </div>
                <div className='user-page-content'>


                    <div className='search-result-wrap'>
                        {dash &&
                            <div className='search-result'>
                                {jobs.map((job, index) => {
                                    return (
                                        <div className='result-wrap' onMouseOver={() => setApply(job)}>
                                            <div className='result'>
                                                <div className='result-label'>Job Title:</div>
                                                <div className='result-text'>{job.title}</div>
                                            </div>
                                            <div className='result'>
                                                <div className='result-label'>Description:</div>
                                                <div className='desc-text'>{job.description}</div>
                                            </div>
                                            <div className='result'>
                                                <div className='result-label'>Qualification:</div>
                                                <div className='result-text'>{job.qualification}</div>
                                            </div>
                                            <div className='result'>
                                                <div className='result-label'>Salary: GH <FontAwesomeIcon icon={faCediSign} /></div>
                                                <div className='result-text'>{job.salary}</div>
                                            </div>
                                            <div className='result'>
                                                <div className='result-label'>Deadline:</div>
                                                <div className='result-text'>{job.deadline}</div>
                                            </div>
                                            <div className='apply-button'><button className='a-btn' onClick={updateJob}>Apply</button></div>
                                        </div>
                                    );
                                })}


                            </div>
                        }

                        {update && <Apply />}
                        {job && <JobList />}
                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}
