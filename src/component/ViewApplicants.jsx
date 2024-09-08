import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ViewApplicants = () => {
    const [jobs, setJobs] = useState([])
    console.log(jobs)
    const GET_JOBS_API = "http://localhost:8080/get-applicants"
    useEffect(() => {
        axios.get(GET_JOBS_API)
            .then(response => {
                setJobs(response.data, null, 2)


            }).catch((error) => {
                console.log(error)
            })
    }, []);
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
                            <tr>
                                <td>{job.fname}</td>
                                <td>{job.lname}</td>
                                <td>{job.uname}</td>
                                <td>{job.phoneNumber}</td>
                            </tr>
                        );
                    })}

                </table>
            </div>
        </div>
    )
}
