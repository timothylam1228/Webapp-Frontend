
import React, { useState,useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../../containers/Home";
import LoginForm from '../account/login-form';
import RegisterForm from '../account/register-form';
import { Link } from 'react-router-dom'

export default function TopNav() {
  const [modalLoginShow, setModalLoginShow] = React.useState(false);
  const [modalRegisterShow, setModalRegisterShow] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [userName, setUsername] = React.useState("");


  const handleShowModalOne = () => {
    setModalLoginShow(true);
  }

  const handleShowModalTwo = () => {
    setModalRegisterShow(true);
  }

  const handleClose = () => {
    setModalLoginShow(false);
    setModalRegisterShow(false);
  }
  const signOut = () => {
    localStorage.clear()
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    console.log(loggedInUser)
    if (loggedInUser) {
      setIsLogin(true);
      console.log(loggedInUser)
      setUsername(loggedInUser)
    }
  }, []);
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand  as={Link} to="/home">Pet City</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/pet">Pet</Nav.Link>
          <Nav.Link as={Link} to="/food">Food</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/cart">My cart</Nav.Link>
          {isLogin ? 
          <>
          <Nav.Link  href="/home" onClick={()=>signOut()}>Logout</Nav.Link>
            <Nav.Link as={Link} to="/accont">{userName}</Nav.Link>
            </>:
          <>
           <Nav.Link onClick={() => handleShowModalOne()}>Login</Nav.Link>
           <Nav.Link onClick={() => handleShowModalTwo()}>Register</Nav.Link>

           </>
          }
        
        </Nav>
        <LoginForm show={modalLoginShow} onHide={() => handleClose()} />
        <RegisterForm show={modalRegisterShow} onHide={() => handleClose()} />

      </Navbar.Collapse>
    </Navbar>
  )
}