import React from "react"
import { NavLink } from "react-router-dom"
import gynecomastia from '../Images/gynecomastia.png'

function Chest () {
    return(
        <div>
             <NavLink exact to="/" active className="active">
              <img src={gynecomastia} className="chest-icon"/>
              </NavLink> 


        </div>
    )
}

export default Chest