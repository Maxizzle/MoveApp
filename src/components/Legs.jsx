import React from "react"
import { NavLink } from "react-router-dom"
import muscles from '../Images/muscles.png'

function Legs (props) {
    return(
        <div>
              <NavLink exact to="/" active className="active">
              <img src={muscles} className="legs-icon"/>
              </NavLink> 
        </div>
    )
} 

export default Legs