import React from 'react';
import Common from './Common';
import ab from '../images/Isometric laptop with chart and financial growth graph.jpg'

export default function About() {
    return (
        <Common content='Welcome to About page'
            title='We are with you'
            btn='Contact Us'
            quotes=' “You only have to do a few things right in your life so long as you don’t do too many things wrong.”'
            visit='/contact'
            imgsrc={ab} />
    )
}
