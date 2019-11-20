import React from 'react'
import { NavLink } from 'react-router-dom'
import top from "../../WomenImg/top.png"

function Top() {
    return(
        <NavLink exact to="/" active className="active">
        <img src={top} className="top-icon"/>
        </NavLink>  
    )
}

export default Top