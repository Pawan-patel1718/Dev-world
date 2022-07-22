import React, { useState, useEffect } from 'react'
import axios from 'axios';
const apiBaseUrl = `https://pokeapi.co/api/v2/pokemon/`;


export default function Axios() {
    const [num, setNum] = useState(1)
    const [name, setName] = useState()
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${apiBaseUrl}${num}`)
            setName(res.data.name);
        }
        getData();
    }, [num])
    return (<>

        <h1>Pokemon name is <span style={{ color: 'blue' }}>{name}</span> </h1>
        <select value={num} onChange={(event) => {
            setNum(event.target.value)
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="25">25</option>
            <option value="44">44</option>
            <option value="12">12</option>
            <option value="11">11</option>
            <option value="18">18</option>
            <option value="21">21</option>
            <option value="20">20</option>
            <option value="19">19</option>
            <option value="18">18</option>
            <option value="17">17</option>
            <option value="16">16</option>
        </select>
    </>
    )
}
