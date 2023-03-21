
// import logo from "client/src/codebloggs_logo2"
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";
import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/navbar.css"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

export default function Navbars() {
  // const [email, setEmail] = useState()
  // useEffect(() => {

  // async function getEmail() {
  //   const response = await fetch(
  //     `http://localhost:3004/session-email/${token}`
  //   );
  //   const res = await response.json();
  //   console.log(res)

  //  setEmail(res.session.user.email)
  // }
  // getEmail();

  //     return;
  //    }, [])


  // const token = (getCookie('token'));
  return (
    <div
      // style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar className= "navigation" backgroundColor="#9575CD"
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
           <img
              src={'https://i.ibb.co/dLBWqJG/codebloggs-logo2-removebg-preview.png'}
              alt=""
              style={{ width: 70 + "%" }}
            />
           
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink  to="/" className="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/bloggs" className="activeClicked">
              <CDBSidebarMenuItem icon="table">Bloggs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/network" className="activeClicked">
              <CDBSidebarMenuItem icon="user">Network</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin" className="activeClicked">
              <CDBSidebarMenuItem icon="user">
                Admin
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Codebloggs ™ 
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

//   {token == 0 ? " " : email}

