import axios from 'axios';
import React, { useState } from 'react'

export const AddJob = () => {
  const POST_JOB_API = "http://localhost:8080/post-job";
  const [form, setForm] = useState({
    title: "",
    description: "",
    qualification: "",
    salary: "",
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
  const checkDate = form.deadline;

  let titleLength;
  let descLength;
  let qLength;
  let salaryLength;
  let validSalary;
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
          alert("please enter qualification")
      } else {
        qLength = true;
      }
  }

  if (qLength) {
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

  if (titleLength && descLength && qLength && salaryLength && validSalary && dateLength) {

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
    <div className='login-container'>
      <form action="" onSubmit={submitForm} className='add-wrap'>
        <div>
          <div className='login'><input className='login-input' type="text" name="title" value={form.title} onChange={onUpdateForm} placeholder='Title' id="" /></div>
          <textarea className='text-area-input' type="text" maxLength={150} name="description" value={form.description} onChange={onUpdateForm} placeholder='Description' id="" />
          <div className='login'><input className='login-input' type="text" name="qualification" value={form.qualification} onChange={onUpdateForm} placeholder='Qualication' id="" /></div>
          <div className='login'><input className='login-input' type="text" name="salary" value={form.salary} onChange={onUpdateForm} placeholder='Salary' id="" /></div>
          <div className='login'><input className='login-input' type="date" name="deadline" value={form.deadline} onChange={onUpdateForm} id="" /></div>
          <div className='login-button'><button className='l-bt' type='submit'>submit</button></div>
        </div>
      </form>
    </div>
  )
}
