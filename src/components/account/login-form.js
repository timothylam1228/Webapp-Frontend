
import React, {useState }from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use


  export default function LoginForm(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginForm, setloginForm] = useState({
      countryCode: "852",
      phoneNumber: "",
      password: "",
    })

    const [validationStatus, setValidationStatus] = useState(false);

    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

      return(
  
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
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
        </Modal.Body>
        
      </Modal>
      )
  }