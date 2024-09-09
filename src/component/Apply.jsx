import React, { useRef, useState } from 'react'
import { Usernav } from './Usernav'
import axios from 'axios';

export const Apply = () => {
  const getData = localStorage.getItem("user");
  const parsedData = JSON.parse(getData);
  const UPDATE_CV = "http://localhost:8081/add-staff";
  const [file, setFile] = useState('')
  const onUpdate = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = e => {
    e.preventDefault();
    let fileLength;
    let ext;

    if (file.length < 1) {
      fileLength = false;
      alert("Choose file")
    } else {
      fileLength = true;
    }

    if (fileLength) {
      var format = [".PDF", ".pdf"];
      var extension = file.name.substr(file.name.indexOf('.'))
      if (format.includes(extension)) {
        ext = true;
      } else {
        alert("only PDF or format is supported")
        ext = false;
      }

      if (fileLength && ext) {
        let formData = new FormData();
        formData.append("applicantCV", file)
        axios
          .patch(`http://localhost:8080/apply/${parsedData.uname}`, formData, {

          })
          .then(response => {
            alert(JSON.stringify(response.data))


          }).catch((error) => {
            alert(error)
          })
      }
    }
  }
  return (
    <>
      <div className='login-container'>
        <div className='login-wrap'>
          <div className='upload'>Upload CV(PDF format Only)</div>
          <div className='login'><input className='login-input-file' type="file" name="applicantCV" onChange={onUpdate} id="" /></div>
          <div className='login-button'><button className='l-bt' onClick={onSubmit}>submit</button></div>
        </div>
      </div>
    </>

  )
}
