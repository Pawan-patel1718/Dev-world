import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';
import "d:/Pawan/Webdevlopment/React/material/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "d:/Pawan/Webdevlopment/React/material/node_modules/bootstrap/dist/js/bootstrap.bundle";
import './style.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='*' element={<Home />} />
      </Routes>
    </>
  )
}
