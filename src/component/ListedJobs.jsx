import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ListedJobs = () => {
    const [jobs, setJobs] = useState([])
    console.log(jobs)
    const GET_JOBS_API = "http://localhost:8080/get-jobs"
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
                        <th>Job Title</th>
                        <th>Qualification</th>
                        <th>Salary</th>
                        <th>deadline</th>
                    </tr>
                    {jobs.map((job, index) => {
                        return (
                            <tr>
                                <td>{job.title}</td>
                                <td>{job.qualification}</td>
                                <td>{job.salary}</td>
                                <td>{job.deadline}</td>
                            </tr>
                        );
                    })}

                </table>
            </div>
        </div>
    )
}
