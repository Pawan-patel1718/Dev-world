import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';

export default function User(props) {
    const { fname, lname } = useParams();
    const Location = useLocation();
    const Navigate = useNavigate();

    return (<>
        <h1 className="bg-dark text-light text-center">Hii {fname} {lname}</h1>
        <div>you are at {Location.pathname}</div>
        <h1>hey their i am use whatsapp!</h1>
        <button onClick={() => { Navigate(-1) }}>Go back</button>
    </>
    )
}
