import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Link.css'

export default function Menu() {
    const Navigate = useNavigate();
    return (
        <>
            <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', listStyle: 'none', backgroundColor: 'gray', marginBottom: '0rem' }}>
                <button onClick={() => { Navigate(-1) }} style={{ fontSize: '40px', backgroundColor: 'gray', border: 'none' }}>&#8606;</button>
                <li><Link className='link-style' to="/">About Us </Link></li>
                <li><Link className='link-style' to="/contact">Contact Us </Link></li>
                <li><Link className='link-style' to="/user/pawan">User </Link></li>
                {/* <li><Link className='link-style' to="/search">Search </Link></li> */}
                <button onClick={() => { Navigate(+1) }} style={{ fontSize: '40px', backgroundColor: 'gray', border: 'none' }}>&#8608;</button>
            </ul>
        </>
    )
}
