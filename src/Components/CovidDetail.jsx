import React, { useEffect } from 'react'

export default function CovidDetail() {
    const getData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json')
        const actualData = await res.json();
        console.log(actualData);
    }
    useEffect(() => {
        getData();
    }, [])

    const fontStyle = {
        fontFamily: ` Nunito, sans - serif`
    }
    return (
        <>
            <h1 style={{ fontFamily: 'Nunito', fontSmooth: 'rem', textAlign: 'center', backgroundColor: 'gray' }} >COVID-19 IN INDIA </h1>

        </>
    )
}
