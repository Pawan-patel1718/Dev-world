import React, { useEffect, useState } from 'react';
// import axios from 'axios';

export default function NewSresult() {
    const [img, setImg] = useState();


    // setImage(res.data.results[1].urls.regular)
    useEffect(() => {
        let url = `https://api.unsplash.com/search/photos?query=london&client_id=Rk2nsDnFZ1Lq9SF9Up8h2SbpIUwZOuuYtXc15xdVebU&page=1&per_page=10`;
        fetch(url)
            .then((Data) => {
                return Data.json();
            })
            .then((Data) => {
                console.log(Data)
                setImg(Data.results)
            })
    }, [img])
    return (
        <>
            {
                img.map((im) => (
                    <img src={im.urls.regular} alt="image not found!" />
                ))
            }
            {console.log(img)}

        </>
    )
}
