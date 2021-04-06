
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";

import Button from 'react-bootstrap/Button';

export default function RegisterForm(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");


  function validateForm() {
    //////Want api check user exist
    if( email.length < 0 || password.length < 0){
      return false;
    }if(password != confirmPassword){
      return false;
    }
    
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>


          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          
          <Form.Group size="lg" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Register
        </Button>
        </Form>
      </Modal.Body>

    </Modal>
  )
}