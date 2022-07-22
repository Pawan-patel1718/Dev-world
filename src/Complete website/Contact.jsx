import React from 'react'

export default function Contact() {
  return (
    <div className=' contact'>
      <form >

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Full Name</label>
          <input required type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Phone</label>
          <input required type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input required type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
