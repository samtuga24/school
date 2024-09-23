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
            <div className='login-header'>Listed Vacancies</div>
            <div className='result-table'>
                <table className='table-width'>
                    <tr>
                        <th>Job Title</th>
                        <th>Qualification</th>
                        <th>Years of Experience</th>
                        <th>Salary</th>
                        <th>deadline</th>
                    </tr>
                    {jobs.map((job, index) => {
                        return (
                            <tr>
                                <td className='t-data'>{job.title}</td>
                                <td className='t-data'>{job.qualification}</td>
                                <td className='t-data'>{job.experience}</td>
                                <td className='t-data'>{job.salary}</td>
                                <td className='t-data'>{job.deadline}</td>
                            </tr>
                        );
                    })}

                </table>
            </div>
        </div>
    )
}
