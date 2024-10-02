import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Document } from 'react-pdf';
import { faBan, faCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
export const ViewApplicants = () => {
    const [apply, setJobs] = useState([])
    const [update, setUpdate] = useState([])
    const [show, setShow] = useState(false)
    const GET_JOBS_API = "http://localhost:8080/get-applicants"
    const VIEW_CV = "http://localhost:8080/display/"
    const handleClose = () => {
        setShow(false)
    }
    useEffect(() => {
        axios.get(GET_JOBS_API)
            .then(response => {
                setJobs(response.data, null, 2)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    const rowClick = (cv) => {

        axios.get(`http://localhost:8080/display/${cv}`)
            .then(response => {
                // <Document file={`http://localhost:8080/display/${cv}`}/>
                window.open(`http://localhost:8080/display/${cv}`)
            }).catch((error) => {
                console.log(error)
            })
    }

    const updateStatus = (e, email) => {
        e.stopPropagation();
        apply.applicantCV ??
            axios
                .patch(`http://localhost:8080/update-status/${email}`, {

                })
                .then(response => {
                    alert(JSON.stringify(response.data))


                }).catch((error) => {
                    alert(error)
                })


    }
    console.log(apply.applicantCV ?? 1)
    return (
        <div className='view-container'>
            <div className='login-header'>Applicants</div>
            <div className='result-table'>
                <table className='table-width'>
                    <tr>
                        <th className='t-data'>First Name</th>
                        <th className='t-data'>Last Name</th>
                        <th className='t-data'>Username</th>
                        <th className='t-data'>Phone No.</th>
                        <th className='t-data'>Job Title</th>
                        <th className='t-data'>Status</th>
                        <th className='t-data'>Action</th>
                    </tr>
                    {apply.map((job, index) => {

                        return (
                            <>
                                {job.jobs.map((details, i) => {
                                    return (
                                        <tr className='table-row' key={i}>
                                            <td className='t-data'>{job.fname}</td>
                                            <td className='t-data'>{job.lname}</td>
                                            <td className='t-data'>{job.uname}</td>
                                            <td className='t-data'>{job.phoneNumber}</td>
                                            <td className='t-data-t'>{details.title}</td>
                                            <td className='t-data'>{job.jobStatus}</td>
                                            <td className='t-data-1'>
                                                <div className='accept-wrap'>
                                                    <div className='accept' onClick={(e) => updateStatus(e, job.uname)}><FontAwesomeIcon icon={faCheck}/>Accept</div>
                                                    <div className='view' onClick={() => rowClick(job.applicantCV?.name)}><FontAwesomeIcon icon={faEye} />View CV</div>
                                                </div>
                                            </td>
                                        </tr>
                                    );

                                })}
                            </>
                        );

                    })}
                </table>
            </div>
        </div>
    )
}
