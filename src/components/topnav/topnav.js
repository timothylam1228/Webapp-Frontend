
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../account/login-form';

  export default function TopNav(){
    const [modalShow, setModalShow] = React.useState(false);

      return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Pet City</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">
        <Nav.Link href="#pet">Pet</Nav.Link>
            <Nav.Link href="#food">Food</Nav.Link>
        </Nav>
          <Nav className="ml-auto">
 
            <Nav.Link onClick={() => setModalShow(true)}>Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          
              <LoginForm
              show={modalShow}
              onHide={() => setModalShow(false)}
        />

{/* 
          <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
  }