import React from 'react'


export default function About(props) {
    return (
        <>
            <h1 className="bg-dark text-light text-center">Welcome to {props.topic} </h1>
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img
                                src="https://picsum.photos/201/200"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img
                                src="https://picsum.photos/200/201"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img
                                src="https://picsum.photos/200/200"
                                className="card-img-top"
                                alt="..."
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
