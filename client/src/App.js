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


function App() {
  return (
<div>
  <Header />
     <Navbars />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={<Register />} />
     <Route path="/bloggs" element={<Bloggs />} />
     <Route path="/network" element={<Network />} />
     <Route path="/admin" element={<Admin />} />
     </Routes>
   </div>

  );
}

export default App;
