import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import Home from "./components/Home";
import Navbars from "./components/navbar";
import Header from "./components/header";
import Register from "./components/register/register"
import Bloggs from "./components/bloggs/bloggs"
import Network from "./components/network/network"
import Admin from "./components/admin/admin"
import Login from "./components/login/login"
import UserManagement from "./components/admin/userManagement";
import Edit from "./components/admin/editUser";

function App() {
  return (
<div>
  <Header />

     <Navbars />
     <Routes>
     <Route path="/home" element={<Home />} />
     <Route path="/register" element={<Register />} />
     <Route path="/" element={<Login />} />
     <Route path="/bloggs" element={<Bloggs />} />
     <Route path="/network" element={<Network />} />
    
     <Route path="/admin" element={<Admin />} />
     <Route path="/userManagement" element={<UserManagement />} />
     <Route path="/edit/:id" element={<Edit />} />

     </Routes>
   </div>

  );
}

export default App;
