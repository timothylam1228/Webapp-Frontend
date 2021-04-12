
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use


export default function LoginForm(props) {
  const axios = require('axios').default;
  const bcrypt = require('bcryptjs');


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  })

  const [validationStatus, setValidationStatus] = useState(false);
  useEffect(() => {
    const status =
      loginForm.email &&
      loginForm.email.indexOf("@") > 0;
    setValidationStatus(status);
  }, [loginForm]);



  function handleSubmit(event) {
    // console.log(loginForm.email)
    // console.log(loginForm.password)
    axios.post('http://localhost:3000/dev/users/login', {
      email: loginForm.email,
      password: loginForm.password
    })
      .then(function (response) {
        if (response.data.message == "Sucess") {
          alert("Login success!")
        } else if (response.data.message == "Account Not Existed") {
          alert("This account is not existed")
        } else {
          alert("Wrong password!")
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
    setloginForm({ ...loginForm, [name]: value });
  }

  return (

    // my app code

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login          </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form onSubmit={handleSubmit} method="POST">
          <Form.Group size="lg" >
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              name="email"
              type="email"
              id="email"
              value={loginForm.email}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group size="lg" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              id="password"
              value={loginForm.password}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button block size="lg" disabled={!validationStatus} onClick={() => handleSubmit()} >
            Login
        </Button>
        </Form>
      </Modal.Body>

    </Modal >
  )
}