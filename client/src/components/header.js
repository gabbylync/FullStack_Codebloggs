import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
// import { ToastContainer, toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import CreatepostModal from "./modals/CreatepostModal";
import { setCookie } from 'react-use-cookie';
import { getCookie } from "react-use-cookie";
import React, { useEffect } from "react";
import '../App.css'

export default function Header() {
  

///////////////////////////////////////////////

  const [email, setEmail] = useState()
  useEffect(() => {
  async function getEmail() {
    const response = await fetch(
      `http://localhost:3004/session-email/${token}`
    );
    const res = await response.json();
    // console.log(res)

   setEmail(res.session.user.email) 
  }
  getEmail();


  return;
 }, [])


  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState();

  const logOut = () => {
    // navigate("/");
      setCookie('token', '0')
      navigate("/");
    setisLoggedIn(false);
  };
  const handleToastClick = () =>
    toast("Success Link Clicked", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  const token = (getCookie('token'));
  ////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar>
        <Container>
          <NavLink className="navbar-brand" to="/home">
            <img
              style={{ width: 10 + "%" }}
              src= "/CodeBloggs graphic.png"
            ></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <h1 className = "header"> CodeBloggs </h1>
          <p className="nav-item" >{token == 0 ? "" : email}   </p>
      
        <CreatepostModal />
        {/* <p className="nav-item" >{token == 0 ? "" : email}   </p> */}
    
          <NavDropdown title="Menu" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3" onClick={handleToastClick}>
              Account Settings
            </NavDropdown.Item>
         
            <NavDropdown.Item href="#action4" onClick={logOut}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
}
