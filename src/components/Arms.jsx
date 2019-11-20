import React from "react"
import { NavLink } from "react-router-dom"
import dumbbell from "../Images/dumbbell (1).png"

function Arms() {
    return(
        <div>
              <NavLink exact to="/" active className="active">
              <img src={dumbbell} className="dunmbell-icon"/>
              </NavLink>  

        </div>
    )
}

export default Arms