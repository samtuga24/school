import axios from 'axios';
import React, { useState } from 'react'

export const AddJob = () => {
  const POST_JOB_API = "http://localhost:8080/post-job";
  const [form, setForm] = useState({
    title: "",
    description: "",
    qualification: "",
    salary: "",
    experience: "",
    deadline: ""
  });

  const onUpdateForm = e => {
    const newFormState = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(newFormState);

  }
  const finalSubmit = JSON.stringify(form, null, 2)
  const submitForm = e => {
    e.preventDefault();
    const checkTitle = form.title;
    const checkDesc = form.description;
    const checkQ = form.qualification;
    const checkSalary = form.salary;
    const checkExp = form.experience;
    const checkDate = form.deadline;

    let titleLength;
    let descLength;
    let qLength;
    let salaryLength;
    let validSalary;
    let expLength;
    let dateLength;
    if (checkTitle.trim().length == 0) {
      titleLength = false;
      alert("please enter title")
    } else {

      titleLength = true;
    }

    if (titleLength) {
      if (checkDesc.trim().length == 0) {
        descLength = false;
        alert("please enter description")
      } else {
        descLength = true;
      }
    }

    if (descLength) {
      if (checkQ.trim().length == 0) {
        qLength = false;
        alert("please select academic qualification")
      } else {
        qLength = true;
      }
    }

    if(qLength) {
      if(checkExp.trim().length == 0){
        expLength = false;
        alert("please select years of work experience")
      } else{
        expLength = true;
      }
    }
    if (expLength) {
      if (checkSalary.trim().length == 0) {
        salaryLength = false;
        alert("please enter salary")
      } else {
        salaryLength = true;
      }
    }

    if (salaryLength) {
      if (isNaN(checkSalary)) {
        validSalary = false;
        alert("please enter a valid amount")
      } else {
        validSalary = true;
      }
    }


    if (validSalary) {
      if (checkDate.trim().length == 0) {
        dateLength = false;
        alert("please choose deadline for application")
      } else {
        dateLength = true;
      }
    }

    if (titleLength && descLength && qLength && expLength && salaryLength && validSalary  && dateLength) {

      axios
        .post(POST_JOB_API, finalSubmit, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
          alert(response.data)
        })
        .catch((error) => {
          alert(error)
        })

      // alert(finalSubmit)
    }
  }
  return (
    <div className='add-container'>
      <div className='login-header'>Post Vacancy</div>
      <form action="" onSubmit={submitForm} className='add-wrap'>
        <div>
          <div className='login'><input className='login-input' type="text" name="title" value={form.title} onChange={onUpdateForm} placeholder='Title' id="" /></div>
          <textarea className='text-area-input' type="text" maxLength={150} name="description" value={form.description} onChange={onUpdateForm} placeholder='Description' id="" />
          <div className='login'>
            <select className='login-input' value={form.qualification} name="qualification" onChange={onUpdateForm} id="">
              <option value="" disabled selected>Qualification</option>
              <option value="BSc. Computer Science">BSc. Computer Science </option>
              <option value="HND IT">HND IT</option>
              <option value="MSc. Petroleum Engineering">MSc. Petroleum Engineering</option>
              <option value="">BSc. Computer Science</option>
              <option value="">BSc. Computer Science</option>
            </select>
          </div>

          <div className='login'>
            <select className='login-input' value={form.experience} name="experience" onChange={onUpdateForm} id="">
              <option value="" disabled selected>Years of Working Experience</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* <div className='login'><input className='login-input' type="text" name="qualification" value={form.qualification} onChange={onUpdateForm} placeholder='Qualication' id="" /></div> */}
          <div className='login'><input className='login-input' type="text" name="salary" value={form.salary} onChange={onUpdateForm} placeholder='Salary' id="" /></div>
          <div className='login'><input className='login-input' type="date" name="deadline" value={form.deadline} onChange={onUpdateForm} id="" /></div>
          <div className='login-button'><button className='l-bt' type='submit'>submit</button></div>
        </div>
      </form>
    </div>
  )
}
