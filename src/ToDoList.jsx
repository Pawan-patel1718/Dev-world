import React, { useState } from 'react'
import './Css/ToDo.css'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import List from './Components/List';


export default function () {
    const [item, setitem] = useState();
    const [newItem, setNewItem] = useState([])
    const itemEvent = (e) => {
        setitem(e.target.value)
    }
    const listOfItmes = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item]
        });
        setitem(" ");
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>ToDo List</h1>
                    <div className="add">
                        <input type="text" placeholder='Add items' value={item} onChange={itemEvent} />
                        <Button variant="contained" onClick={listOfItmes}><AddIcon /></Button>
                    </div>
                    <div className="list">
                        <ul>
                            {newItem.map((val, index) => {
                                return (<List value={val} />)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
