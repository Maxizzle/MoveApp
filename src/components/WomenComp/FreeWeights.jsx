import React from 'react'
import { NavLink } from 'react-router-dom'
import freeWeights from "../../WomenImg/freeWeights"

function Abs() {
    return(
        <NavLink exact to="/" active className="active">
        <img src={freeWeights} className="free-icon"/>
        </NavLink>  
    )
}

export default FreeWeights