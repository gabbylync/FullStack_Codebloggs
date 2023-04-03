import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";
import {getCookie} from "react-use-cookie";
import SidebarMenu from 'react-bootstrap-sidebar-menu';

import { useLocation } from "react-router-dom";
import "../components/styles/navbar.css"

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

// const navigate = useNavigate();
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
    // setEmail(res.data.user.email) 
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

const [bgcolor, setBgcolor] = useState('black');
  const [textcolor, setTextcolor] = useState('white'); 


  function handleHighlightTab() {
      setBgcolor('white');
      setTextcolor('black');
  } 



  return (

    <body>
<div class="sidebar">
<NavLink className="navbar-brand" to="/home">
<img
    src={
      "https://i.ibb.co/dLBWqJG/codebloggs-logo2-removebg-preview.png"
    }
    alt=""
    style={{ width: 90 + "%" }}
  />
    </NavLink>
    <br/>
    <br/>
    <br/>
    <NavLink to="/home"  >
    {/* onClick={handleHighlightTab} style={{backgroundColor:`${bgcolor}`,color:`${textcolor}` }}  */}
  <a ><i className="fa fa-fw fa-home sidebarz"></i> Home</a>
  </NavLink>
  <br/>
  <NavLink to="/bloggs" className="activeClicked">
  <a href="#services"><i className="fa fa-fw fa-file sidebarz"></i> Bloggs</a>
  </NavLink>
  <br/>
   <NavLink to="/network" className="activeClicked">
  <a href="#clients"><i className="fa fa-fw fa-smile sidebarz"></i> Network</a>
  </NavLink>
  <br/>
  {userAuth === 'admin' ?
    <NavLink to="/admin"  className= 'activeClicked' >
    <a href="#contact"><i className="fa fa-fw fa-address-card sidebarz"></i> Admin</a>
     </NavLink>
     : <NavLink></NavLink>
  }

</div>
</body>
 

  );
}

