import React, { useEffect, useState } from 'react'

export default function PostRequest() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(` https://reqres.in/api/users?page=2`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dd)
        })
            .then(res => res.json())
            .then(actualData => setData(actualData))
    }, [])
    const dd = {
        "name": "Pawan",
        "job": "Fullstack web devloper"
    }
    return (
        <>
            {console.log(data)}
            <form>
                <input type="text" name="fname" placeholder='Enter Your Name' /><br></br>
                <input type="text" name="desig" placeholder='Enter Your Designation' /><br />
                <button type="submit">submit</button>
            </form>
        </>
    )
}
// "name": "morpheus",
// "job": "leader",
// "id": "83",
// "createdAt": "2022-07-09T12:12:50.975Z"