import React from 'react'

import { Routes, Route, Link, Navigate } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Error from './Error';
import Menu from './Menu';
// import Search from './Search';
import User from './User';

export default function ReactRouter() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<About topic='About Us' />} />
                <Route path="contact" element={<Contact topic='Contact Us' />} />
                <Route path="user/pawan" element={<User />} />
                {/* <Route path='search' element={<Search />} /> */}
                <Route path='*' element={<About topic='About Us' />} />

            </Routes>
        </>
    )
}
