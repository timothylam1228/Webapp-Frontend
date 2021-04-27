
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';


export default function RegisterForm(props) {
  const axios = require('axios').default;


  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  const [regForm, setregForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationStatus, setValidationStatus] = useState(false);
  useEffect(() => {
    const status =
      regForm.name &&
      regForm.name.length >= 6 &&
      regForm.email &&
      regForm.email.indexOf("@") > 0 &&
      strongRegex.test(regForm.password) &&
      regForm.confirmPassword === regForm.password;
    setValidationStatus(status);
  }, [regForm]);

  function handleSubmit(event) {
    axios.post('http://localhost:3000/dev/users/create', {
      name: regForm.name,
      email: regForm.email,
      password: regForm.password
    })
      .then(function (response) {
        if (response.data.message === "Registered") {
          alert("Registration success!")
        } else if (response.data.message === "Used") {
          alert("This account has been used!")
        }

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setregForm({ ...regForm, [name]: value });
  }

  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{width:'100%', maxHeight:'100%', background:'none'}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form onSubmit={handleSubmit} method="POST">
          <Form.Group size="lg">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              name="email"
              id="email"
              value={regForm.email}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group size="lg">
            <Form.Label>Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              name="name"
              id="name"
              value={regForm.name}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>


          <Form.Group size="lg">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={regForm.password}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>


          <Form.Group size="lg" >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={regForm.confirmPassword}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button block size="lg" disabled={!validationStatus} onClick={() => handleSubmit()}>
            Register
        </Button>
        </Form>
      </Modal.Body>

    </Modal>
  )
}