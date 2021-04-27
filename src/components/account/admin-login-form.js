
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router"

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use


export default function AdminloginForm(props) {
  const axios = require('axios').default;
  let history = useHistory()
  const [AdminloginForm, setAdminloginForm] = useState({
    username: "",
    password: "",
  })

  const [validationStatus, setValidationStatus] = useState(true);


  function handleSubmit(event) {

    axios.post('http://localhost:3000/dev/admin/login', {
      username: AdminloginForm.username,
      password: AdminloginForm.password
    })
      .then(function (response) {
        if (response.data.message == "Sucess") {
          alert("Login success!");
          props.onHide();
          localStorage.setItem('token',response.data.body.token)
          window.location.reload()
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
    setAdminloginForm({ ...AdminloginForm, [name]: value });
  }



  return (
    // my app code
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ width:'100%', maxHeight:'100%', background:'none'}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Admin Login          </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form onSubmit={handleSubmit} method="POST">
          <Form.Group size="lg" >
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              name="username"
              type="username"
              id="username"
              value={AdminloginForm.username}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group size="lg" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              id="password"
              value={AdminloginForm.password}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button block size="sm" disabled={!validationStatus} onClick={() => handleSubmit()} >
            Login
        </Button>
        </Form>
      </Modal.Body>

    </Modal >
  )
}