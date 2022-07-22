import React from 'react'
// import img from '../images/Isometric laptop with chart and financial growth graph.jpg'
import Card from './Card'
import Sdata from './Sdata'

export default function Services() {
  return (<>
    <h1 className="text-center my-3">Our Services</h1>
    <main className="main d-grid gap-3 mx-5">
      {

        Sdata.map((val, index) => {
          return <Card
            key={index}
            imgsrc={val.imgsrc}
            title={val.title} />
        })
      }
    </main>
  </>
  )
}
