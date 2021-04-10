
import React, { useState } from 'react';
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
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Pet City</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">
          <Nav.Link href="/pet">Pet</Nav.Link>
          <Nav.Link href="/food">Food</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Link to="/cart">My cart</Link>

          <Nav.Link onClick={() => handleShowModalOne()}>Login</Nav.Link>
          <Nav.Link onClick={() => handleShowModalTwo()}>Register</Nav.Link>

          <Nav.Link href="/accont">Account</Nav.Link>

        </Nav>
        <LoginForm show={modalLoginShow} onHide={() => handleClose()} />
        <RegisterForm show={modalRegisterShow} onHide={() => handleClose()} />

      </Navbar.Collapse>
    </Navbar>
  )
}