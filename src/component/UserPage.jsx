import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilter, faMagnifyingGlass, faCediSign, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Usernav } from './Usernav'
import axios from 'axios'
import { Apply } from './Apply'
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
    }, []);

    useEffect(() => {
        axios.get(GET_USER_API)
            .then(response => {
                setClient(response.data, null, 2)


            }).catch((error) => {
                console.log(error)
            })
    }, []);
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
{/* 
                    <div className='side-nav-item' onClick={clickViewCV}>
                        <div className='side-nav-icon'><FontAwesomeIcon icon={faEye} /></div>
                        <div className='side-nav-text-1'>View CV</div>
                    </div> */}
                </div>
                <div className='user-page-content'>
                    {/* <div className='user-filter'>
                        <div className='filter'>
                            <div className='filter-text'>Filter:</div>
                            <div className='filter-select-wrap'>
                                <select name="" id="" className='filter-select'>
                                    <option value="">Technology</option>
                                </select>
                            </div>
                            <div className='filter-button-wrap'>
                                <div className='filter-icon'><FontAwesomeIcon icon={faFilter} /></div>
                                <div className='filter-button'>Apply Filter</div>
                            </div>
                        </div>
                    </div> */}
                    <div className='user-search'>
                        <div className='search'>
                            <div className='search-input-wrap'>
                                <div className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                                <input className='search-input' type="text" placeholder='search' />
                            </div>
                            <div className='search-button'><button className='s-bt'>search</button></div>
                        </div>
                    </div>

                    <div className='search-result-wrap'>
                        {dash &&
                            <div className='search-result'>
                                {jobs.map((job, index) => {
                                    return (
                                        <div className='result-wrap' onClick={() => setApply(job)}>
                                            <div className='result'>
                                                <div className='result-label'>Job Title:</div>
                                                <div className='result-text'>{job.title}</div>
                                            </div>
                                            <div className='result'>
                                                <div className='result-label'>Description:</div>
                                                <div className='result-text'>{job.description}</div>
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
                    </div>
                </div>

            </div>


        </>

    )
}
