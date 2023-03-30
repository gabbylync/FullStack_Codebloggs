import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";
import {getCookie} from "react-use-cookie";

import { useLocation } from "react-router-dom";
import "../components/styles/navbar.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";




export default function Navbars() {
 // const navigate = useNavigate();
// const [posts, setPosts] = useState();
const [userAuth, setUserAuth] = useState();
/////////////////////////////////////////
/// getting token validated on this page ////
const token = getCookie('token');
console.log('true' , token);

useEffect(() => {
  async function getValidation() {
  
    const response = await fetch(
      `http://localhost:3004/validatetoken/${token}`
    );
    const res = await response.json();
    setUserAuth(res.data.user.auth_level)
    console.log(res.data, "testing")

    if (res.msg === "No tokens are found" || token === undefined)
     {
      // navigate("/")
      return;
    }
    if (res.msg == "Congrats: Validated Token!") {
      const message = "Validation Success"
      // window.alert(message);
      // navigate("/bloggs")
      return;
    }
  }

  getValidation();
}, []);
  return (
    <div
    // style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        className="navigation"
        backgroundColor="#9575CD"
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <img
            src={
              "https://i.ibb.co/dLBWqJG/codebloggs-logo2-removebg-preview.png"
            }
            alt=""
            style={{ width: 70 + "%" }}
          />
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/home" className="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/bloggs" className="activeClicked">
              <CDBSidebarMenuItem icon="table">Bloggs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/network" className="activeClicked">
              <CDBSidebarMenuItem icon="user">Network</CDBSidebarMenuItem>
            </NavLink>
           {userAuth === 'admin' ?
            <NavLink to="/admin" className= 'activeClicked' >
            
             <CDBSidebarMenuItem icon="user">Admin</CDBSidebarMenuItem>
             </NavLink>
             : <NavLink></NavLink>
          }
             
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
