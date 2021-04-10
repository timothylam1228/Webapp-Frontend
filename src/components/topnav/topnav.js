
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../../containers/Home";
import LoginForm from '../account/login-form';
import RegisterForm from '../account/register-form';
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { config } from "../../firebase/config";


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
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <IfFirebaseAuthed>
        {() => {
          setIsLogin(true);
        }}
        </IfFirebaseAuthed>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">Pet City</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mr-auto">
              <Nav.Link href="/pet">Pet</Nav.Link>
              <Nav.Link href="/food">Food</Nav.Link>
            </Nav>
            
              {!isLogin ?
              (<Nav className="ml-auto">
              <Nav.Link onClick={() => handleShowModalOne()}>Login</Nav.Link>
              <Nav.Link onClick={() => handleShowModalTwo()}>Register</Nav.Link>
              </Nav>):
                <Nav.Link href="/Testing">user</Nav.Link>
              }
              <LoginForm show={modalLoginShow} onHide={() => handleClose()} />
              <RegisterForm show={modalRegisterShow} onHide={() => handleClose()} />
              {/* 
          <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Navbar.Collapse>
        </Navbar>
    </FirebaseAuthProvider>
  )
}