
import React, { useState,useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../../containers/Home";
import LoginForm from '../account/login-form';
import RegisterForm from '../account/register-form';
import AdminLoginForm from '../account/admin-login-form';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default function TopNav() {
  const [modalLoginShow, setModalLoginShow] = React.useState(false);
  const [modalRegisterShow, setModalRegisterShow] = React.useState(false);
  const [modalLoginAdmin, setModalLoginAdmin] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [adminIslogin, setAdminIsLogin] = React.useState("");
  const [userName, setUsername] = React.useState("");

  const handleShowModalOne = () => {
    setModalLoginShow(true);
  }

  const handleShowModalTwo = () => {
    setModalRegisterShow(true);
  }
    const handleShowModalAdmin = () => {
    setModalLoginAdmin(true);
  }


  const handleClose = () => {
    setModalLoginShow(false);
    setModalRegisterShow(false);
    setModalLoginAdmin(false);
  }
  const signOut = () => {
    localStorage.clear()
  }

  const AdminNav = () =>{
    return(
      <>
        <Nav className="mr-auto">
        <Nav.Link as={Link}  to="/editpet">Item </Nav.Link>
        <Nav.Link  href="/home" onClick={()=>signOut()}>Logout</Nav.Link>
        </Nav>
        </>
    )
  };

  const UserNav = () => {
     return(
      <>
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/pet">Pet</Nav.Link>
        <Nav.Link as={Link} to="/food">Food</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
           {isLogin ? 
          <>
          <Nav.Link as={Link} to="/cart">My cart</Nav.Link>
          <Nav.Link  href="/home" onClick={()=>signOut()}>Logout</Nav.Link>
          <Nav.Link as={Link} to="/accont">{userName}</Nav.Link>
            </>
            :
          <>
           <Nav.Link onClick={() => handleShowModalOne()}>Login</Nav.Link>
            <Nav.Link onClick={() => handleShowModalAdmin()}>Admin</Nav.Link>
           <Nav.Link onClick={() => handleShowModalTwo()}>Register</Nav.Link>
           </>
          }
          </Nav>
        </>
    )
  }





  useEffect(() => {
    const loggedInUser = localStorage.getItem('token');
    if(loggedInUser){
     var decoded = jwt_decode(loggedInUser);
     if (decoded.type == "user"){
       console.log(decoded)
        setUsername(decoded.name)
        setIsLogin(true);
        setAdminIsLogin(false);
     }else if (decoded.type == "admin"){
        setAdminIsLogin(true);
        setIsLogin(false);
     }
    }
  }, []);
  return (
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand  as={Link} to="/home">Pet City</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
   
        
        {adminIslogin ? <AdminNav /> : <UserNav />}

        <LoginForm show={modalLoginShow} onHide={() => handleClose()} />
        <RegisterForm show={modalRegisterShow} onHide={() => handleClose()} />
        <AdminLoginForm show={modalLoginAdmin} onHide={() => handleClose()}/>

      </Navbar.Collapse>
    </Navbar>
  )
}