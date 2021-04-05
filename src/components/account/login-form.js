
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

  export default function LoginForm(props){
      return(
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
         <h1>Login Form</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Login</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      )
  }