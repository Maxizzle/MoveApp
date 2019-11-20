import React from "react"
import { NavLink } from "react-router-dom"
import sport from '../Images/sport.png'

function Cardio()  {
    return(
        <div>
            <NavLink exact to="/" active className="active">
              <img src={sport} className="male-icon"/>
              </NavLink> 
           
        </div>
    )
}

export default Cardio