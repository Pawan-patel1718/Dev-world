import React from 'react'

export default function Card(props) {
    return (
        <>

            <div className="card my-1 rounded-3" style={{ width: "18rem" }}>
                <img src={props.imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">More info</a>
                </div>
            </div>
        </>
    )
}
