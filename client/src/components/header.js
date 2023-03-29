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
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css'

export default function Header() {
  

///////////////////////////////////////////////

  const [email, setEmail] = useState()
  useEffect(() => {
  async function getEmail() {
    const response = await fetch(
      `http://localhost:3004/session-email/${token}`
    );
    const res = await response.json();
    console.log(res)

   setEmail(res.session.user.email) 
  }
  getEmail();


  return;
 }, [])


  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState();

  const logOut = () => {
    navigate("/");
      setCookie('token', '0')
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
          <NavLink className="navbar-brand" to="/">
            <img
              style={{ width: 40 + "%" }}
              src="https://cdn5.dcbstatic.com/files/c/o/codeboxx_docebosaas_com/userfiles/13037/codebloggs_logo2.png"
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
     
        <CreatepostModal />

          <NavDropdown title="Menu" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3" onClick={handleToastClick}>
              Account Settings
            </NavDropdown.Item>
            <li className="nav-item" >{token == 0 }   </li>
            <NavDropdown.Item href="#action4" onClick={logOut}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
}
