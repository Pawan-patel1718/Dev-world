import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Common(props) {
    return (
        <div className="col-10 mx-auto home">
            <section id="header" className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1">
                            <h1 className='my-5'>{props.content}<br /> <strong style={{ color: '#3b3b3b' }}>{props.title}</strong></h1>
                            <h2 className="my-3">
                                {props.quotes}
                            </h2>
                            <div className="mt-5">
                                <NavLink className="btn btn-outline-dark" to={props.visit}>{props.btn} </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src={props.imgsrc} alt="Not found" className="img-fluid animated" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
