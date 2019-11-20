import React from 'react'
import { NavLink } from 'react-router-dom'
import jogging from "../../WomenImg/jogging"

function Joggings() {
    return(
        <NavLink exact to="/" active className="active">
        <img src={jogging} className="jogging-icon"/>
        </NavLink>  
    )
}

export default Joggings