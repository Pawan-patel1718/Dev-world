import React, { useState } from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../Css/ToDo.css'

export default function List(props) {
      const [line, setLine] = useState()
      const cutIt = () => {
            setLine(true);
      }
      return (
            <>
                  <div className="todo">
                        <span onClick={cutIt}><DeleteForeverIcon /></span>
                        <li style={{ textDecoration: line ? "line-through" : "none", color: line ? "red" : "none" }}>{props.value}</li>
                  </div>
            </>
      )
}
