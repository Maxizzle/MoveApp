import React from "react"
import { NavLink } from "react-router-dom"
import back from '../Images/back.png'

function Back() {
    return(
        <div>

<NavLink exact to="/" active className="active">
              <img src={back} className="back-icon"/>
              </NavLink> 
            
        </div>
    )
}

export default Back