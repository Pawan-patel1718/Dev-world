import Common from "./Common";
import React from 'react'
import web from '../images/Business man 01.jpg'

export default function Home() {
  return (
    <Common content='Grow your Business with'
      title='Dev World'
      btn='Get start'
      quotes='“Success is not final; failure is not fatal: it is the courage to continue that counts.”'
      visit='/services'
      imgsrc={web} />
  )
}
