import axios from 'axios';
import React, { useState, useEffect } from 'react'
// const base_url = 'https://api.pexels.com/v1/';
const base_url = `https://api.unsplash.com/search/photos`;
// access_token='Rk2nsDnFZ1Lq9SF9Up8h2SbpIUwZOuuYtXc15xdVebU'

export default function Sresult() {
    // const token = '563492ad6f917000010000010c6ab8f5f1f24f1aafef576f37f9e680';
    const [img, setImg] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://api.unsplash.com/search/photos?query=london&client_id=Rk2nsDnFZ1Lq9SF9Up8h2SbpIUwZOuuYtXc15xdVebU&page=1&per_page=10`)
            // console.log(res.data.results)
            // console.log(res)
            // setImage(res.data.results[1].urls.regular)
            setImg(res.data.results)

        }
        getData();
    }, [])

    // return(<>{<h1>{Object.keys(image).map((key) => key)}</h1>}</>)
    return (
        <>
            {
                Object.keys(img).map((keyName, i) => (
                    <li className="travelcompany-input" key={i}>
                        <span className="input-label">key: {i} Name: {img[keyName]}</span>
                    </li>
                ))
            }
        </>

    )
}
// {

    // <h1>{Object.keys(image).map((key) => {
    //     <h3>{key}</h3>
    // })}</h1>
    // console.log(image)
// }



      // fetch('https://api.pexels.com/v1/search?query=nature&per_page=3', {
        //     headers: {
        //         Authorization: `${token}`
        //     }
        // })
        //     .then(res => res.json())
            // .then(json => setimage(json))
