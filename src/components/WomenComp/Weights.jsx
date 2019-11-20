import React from 'react'
import { NavLink } from 'react-router-dom'
import freeWeights from "../../WomenImg/freeWeights.png"

function Weights() {
    return(
        <NavLink exact to="/" active className="active">
        <img src={freeWeights} className="free-icon"/>
        </NavLink>  
    )
}

export default Weights