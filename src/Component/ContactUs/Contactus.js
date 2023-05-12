import React, { Fragment, useRef } from 'react'
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './Contact.module.css'
const Contactus = () =>  {
  const name=useRef()
  const email=useRef()
  const phone=useRef()
  const navigate = useNavigate();
  const submithandler= async (e)=>{
    e.preventDefault()
    
    const data={
      name:name.current.value,
      email:email.current.value,
      phone:phone.current.value,
    }
    const contactdata= await fetch('https://ritik-http-default-rtdb.firebaseio.com/contactus.json',{
      method:'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })
    console.log(data)
    name.current.value='';
    email.current.value='';
    phone.current.value='';
    navigate("/");
  }
    return (
        <div className={classes.div}>
          <h2>Fill Enquiry Form</h2>
            <Form className={classes.form}  onSubmit={submithandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={name} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control ref={phone} type="text" placeholder="Phone number" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </div>
    )
}
export default Contactus;