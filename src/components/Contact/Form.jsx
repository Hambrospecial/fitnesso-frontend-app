// import React from 'react'

import './Form.css'
import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { notifyUser } from './utils.js'

function Form() {
  const [state, setState] = useState({
    fullName: '',
    email: '',
    currentWeight: '',
    goalWeight: '',
    goals: '',
  })

 const handleInput=(e)=>{
   const newObj = {...state}
   console.log(newObj, state, 'compare')
   newObj[e.target.name] = e.target.value
   setState(newObj)
 }
 //console.log(state, 'state')

//  const url = 'https://fitnesso-app-new.herokuapp.com/contact-controller'
 const url = 'http://localhost:9067/contact/save'

  const url = 'https://fitnesso-app-new.herokuapp.com/contact-controller'
// const url = 'http://localhost:9067/contact/save'


 const handleSubmit=(e)=>{
   e.preventDefault()
  const body = {
    fullName: state.fullName.trim(),
    email: state.email.trim(),
    currentWeight: state.currentWeight.trim(),
    goalWeight: state.goalWeight.trim(),
    goals: state.goals,
  }
 
  console.log(body)
  axios.post(url, body)
  .then((res)=>{
    console.log(res.data, 'backend response')
    console.log('this request is successful')
    notifyUser('Message Sent Successfully', 'Please Wait..', 'success', 'reload' )
  }).catch((err)=>{
    console.error(err)
    console.log(err.message)
  })
 }

  return (
    <div class='contact-form'>
      <span class='circle one'></span>
      <span class='circle two'></span>

      <form autocomplete='off' onSubmit={handleSubmit}>
        <h3 class='title'>Contact us</h3>
        <div class='input-contact focus'>
          <input type='text' name='fullName' placeholder='Full Name' class='input' value={state.fullName} onChange={handleInput} />
          {/* <label for=''>Full Name</label> */}
          {/* <span>Username</span> */}
        </div>
        <div class='input-contact focus'>
          {' '}
          <input type='email' name='email' placeholder='Email' class='input' value={state.email} onChange={handleInput} />
          {/* <label for=''>Email</label> */}
          {/* <span>Email</span> */}
        </div>
        <div class='input-contact focus'>
          {' '}
          <input type='tel' name='currentWeight' placeholder='Current Weight' class='input' value={state.currentWeight} onChange={handleInput} />
          {/* <label for=''>Current Weight</label> */}
          {/* <span>Phone</span> */}
        </div>
        <div class='input-contact focus'>
          {' '}
          <input type='tel' name='goalWeight' placeholder='Goal Weight' class='input' value={state.goalWeight} onChange={handleInput} />
          {/* <label for=''>Goal Weight</label> */}
          {/* <span>Goal Weight</span> */}
        </div>
        <div class='input-contact textarea focus'>
          {' '}
          <textarea name='goals' class='input' value={state.goals} onChange={handleInput} ></textarea>
          <label for=''>Describe Your Goals</label>
          {/* <span>Message</span> */}
        </div>
        <input type='submit' value='Get In Touch' class='contact-page-btn' />
      </form>
    </div>
  )
}

export default Form





/* <form action='index.html' autocomplete='off'>

     import React, { useState, useEffect } from "react";
      import { useState } from "react";
      import Axios from 'axios';
function Main() { 
const url = "http://localhost:6080/contact/add";
  const [data, setData] = useState({ 
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      birthday: "",
      event: ""
  })
  function submit(e){
      e.preventDefault();
      Axios.post(url,{
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        birthday: data.birthday,
        event: data.event
      }).then(res => {
        console.log(res.data)
      })
  }
  useEffect({
  },[])
  function handle(e) {
    const newdata = {...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  } 
return (
<Form onSubmit={(e) => submit(e)}>
                <Form.Group className="row mb-3" controlId="formBasicEmail">
                  <label className="col-sm-4 col-lg-2">User Image</label>
                  <div className="col-sm-8 col-lg-10">
                    <div className="custom-file mb-1">
                      <Form.Control type="file" className="custom-file-input" />
                    </div>
                  </div>
                </Form.Group>
                <div className="row mb-3">
                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="firstName"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control onChange={(e) => handle(e)}  value={data.firstName} type="email" placeholder="First name" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="lastName"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control onChange={(e) => handle(e)}  value={data.lastName} type="email" placeholder="Last name" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="username"
                  >
                    <Form.Label>User name</Form.Label>
                    <Form.Control onChange={(e) => handle(e)}  value={data.username} type="email" placeholder="User name" />
                  </Form.Group>
                  <Form.Group className="col-lg-6" controlId="email">
                    <Form.Label>Email address</Form.Label>
                        <InputGroup className="mb-2">
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control onChange={(e) => handle(e)}  value={data.email} type="email" placeholder="Email Address" />
                        </InputGroup>
                  </Form.Group>
                  <Form.Group className="col-lg-6" controlId="birthday">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control onChange={(e) => handle(e)}  value={data.birthday} type="date" />
                  </Form.Group>
                  <Form.Group
                    className="col-lg-6 mb-4"
                    controlId="event"
                  >
                    <Form.Label>Event</Form.Label>
                    <Form.Control onChange={(e) => handle(e)}  value={data.event} type="text" />
                  </Form.Group>
                </div>
              </Form>
);
}
export default Main; */
// function focusFunc() {
  //   let parent = this.parentNode
  //   parent.classList.add('focus')
  // }

  // function blurFunc() {
  //   let parent = this.parentNode
  //   if (this.value == '') {
  //     parent.classList.remove('focus')
  //   }
  // }

  // inputs.forEach((input) => {
  //   input.addEventListener('focus', focusFunc)
  //   input.addEventListener('blur', blurFunc)
  // })

  //  const addContact = async (contact) => {
//    const res = await fetch(url, {
//      method: 'POST',
//      headers: {'Content-type' : 'application/json',
//     'Access-Control-Allow-Origin':'*'},
//      body: JSON.stringify(contact)
//    });
//    const data = await res.json();
//    console.log(data)
//    return data;
//  }