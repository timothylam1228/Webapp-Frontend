
import React, { useState,useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../account/login-form';
import RegisterForm from '../account/register-form';
import AdminLoginForm from '../account/admin-login-form';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default function TopNav() {
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginAdmin, setModalLoginAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [adminIslogin, setAdminIsLogin] = useState("");
  const [userName, setUsername] = useState("");

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
        <Nav.Link as={Link}  to="/admin">Item </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
        <Nav.Link  href="/" onClick={()=>signOut()}>Logout</Nav.Link>
        </Nav>
        </>
    )
  };

  const UserNav = () => {
     return(
      <>

        <Nav className="ml-auto">
           {isLogin ? 
          <>
          <Nav.Link as={Link} to="/cart">My cart</Nav.Link>
          <Nav.Link  href="/" onClick={()=>signOut()}>Logout</Nav.Link>
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
     if (decoded.type === "user"){
       console.log(decoded)
        setUsername(decoded.name)
        setIsLogin(true);
        setAdminIsLogin(false);
     }else if (decoded.type === "admin"){
        setAdminIsLogin(true);
        setIsLogin(false);
     }
    }
  }, []);


  return (
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand  as={Link} to="/">Pet City</Navbar.Brand>
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