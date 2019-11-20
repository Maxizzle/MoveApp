import React from 'react'
import { NavLink } from 'react-router-dom'
import powerLift from "../../WomenImg/powerLift.png"

function Power() {
    return(
        <NavLink exact to="/" active className="active">
        <img src={powerLift} className="powerlift-icon"/>
        </NavLink>  
    )
}

export default Power