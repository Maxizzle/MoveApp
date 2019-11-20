import React from "react"
import { NavLink } from "react-router-dom"
import fit from '../Images/fit.png'

function Core () {
    return(
        <div>
             <NavLink exact to="/" active className="active">
              <img src={fit} className="core-icon"/>
              </NavLink> 
        </div>
    )
}

export default Core