import React, { useState } from 'react'
// import NewSresult from './NewSresult';
// import Sresult from './Sresult'

export default function Search() {
    const [searchImg, setSearchImg] = useState()
    const searchimage = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setSearchImg(e.target.value);
    }
    return (
        <>
            <div className="text-center">
                <input type="text" placeholder='Search Image' className="text-center" onChange={searchimage} />
            </div>
            {/* <Sresult /> */}
            {/* <NewSresult /> */}
        </>
    )
}
