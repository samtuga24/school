import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const JobList = () => {
  const getData = localStorage.getItem("user");
  const parsedData = JSON.parse(getData);
  const GET_ACCEPTED_API = "http://localhost:8080/get-accepted/" + parsedData.uname
  const [accept, setAccept] = useState([]);
  useEffect(() => {
    axios.get(GET_ACCEPTED_API)
      .then(response => {
        setAccept(response.data, null, 2)


      }).catch((error) => {
        console.log(error)
      })
  }, []);
  console.log(accept.length)
  return (
    <div className='job-container'>
      {accept.map((role, index) => {
        return (
          <div className='accept-wrap'>
            <div className='salutation'>Dear, {role.uname}</div>
            <div className='offer-body'>You have been offered a role as a <span className='accept-role'>{role.jobs[index].title}</span> in our firm. Please Contact on 0550028470 to schedule an interview at your own convinience</div>
          </div>
        );
      })}

    </div>
  )
}
