import React from 'react'
import { NavLink } from 'react-router-dom'
import abs from "../../WomenImg/abs"

function Abs() {
    return(
        <NavLink exact to="/" active className="active">
        <img src={abs} className="ab-icon"/>
        </NavLink>  
    )
}

export default Abs