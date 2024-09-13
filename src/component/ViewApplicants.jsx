import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Document } from 'react-pdf';
import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
export const ViewApplicants = () => {
    const [apply, setJobs] = useState([])
    const [update, setUpdate] = useState([])
    console.log(apply)
    const GET_JOBS_API = "http://localhost:8080/get-applicants"
    const VIEW_CV = "http://localhost:8080/display/"
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
        axios
            .patch(`http://localhost:8080/update-status/${email}`, {

            })
            .then(response => {
                alert(JSON.stringify(response.data))


            }).catch((error) => {
                alert(error)
            })
    }
    return (
        <div className='view-container'>
            <div className='result-table'>
                <table className='table-width'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Job Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    {apply.map((job, index) => {

                        return (
                            <>
                                {job.jobs.map((details, i) => {
                                    return (
                                        <tr className='table-row' onClick={() => rowClick(job.applicantCV.name)}>
                                            <td className='t-data'>{job.fname}</td>
                                            <td className='t-data'>{job.lname}</td>
                                            <td className='t-data'>{job.uname}</td>
                                            <td className='t-data'>{job.phoneNumber}</td>
                                            <td className='t-data'>{job.jobs[index].title}</td>
                                            <td className='t-data'>{job.jobStatus}</td>
                                            <td className='t-data action-btn' onClick={(e) => updateStatus(e, job.uname)}>
                                                <div className='accept-btn'><div className='accept-icon'><FontAwesomeIcon icon={faCheck} /></div><div className='accept-text'>Accept</div></div>
                                            </td>
                                        </tr>
                                    );

                                })}
                            </>
                        );
                        // return (
                        //     <></>
                        //     {job.jobs.map((details, i)=>{

                        //     })}
                        //     <tr className='table-row' onClick={() => rowClick(job.applicantCV.name)}>
                        //         <td className='t-data'>{job.fname}</td>
                        //         <td className='t-data'>{job.lname}</td>
                        //         <td className='t-data'>{job.uname}</td>
                        //         <td className='t-data'>{job.phoneNumber}</td>
                        //         <td className='t-data'>{job.jobs[index].title}</td>
                        //         <td className='t-data'>{job.jobStatus}</td>
                        //         <td className='t-data action-btn' onClick={(e)=>updateStatus(e,job.uname)}>
                        //             <div className='accept-btn'><div className='accept-icon'><FontAwesomeIcon icon={faCheck}/></div><div className='accept-text'>Accept</div></div>
                        //         </td>
                        //     </tr>
                        // );
                    })}
                </table>
            </div>
        </div>
    )
}
