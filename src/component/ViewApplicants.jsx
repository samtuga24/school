import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Document } from 'react-pdf';

export const ViewApplicants = () => {
    const [jobs, setJobs] = useState([])
    const [update, setUpdate] = useState([])
    console.log(jobs)
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
        console.log(jobs)
        axios.get(`http://localhost:8080/display/${cv}`)
            .then(response => {
                // <Document file={`http://localhost:8080/display/${cv}`}/>
                window.open(`http://localhost:8080/display/${cv}`)
            }).catch((error) => {
                console.log(error)
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
                    </tr>
                    {jobs.map((job, index) => {
                        return (
                            <tr className='table-row' onClick={() => rowClick(job.applicantCV.name)}>
                                <td className='t-data'>{job.fname}</td>
                                <td className='t-data'>{job.lname}</td>
                                <td className='t-data'>{job.uname}</td>
                                <td className='t-data'>{job.phoneNumber}</td>
                            </tr>
                        );
                    })}

                </table>
            </div>
        </div>
    )
}
