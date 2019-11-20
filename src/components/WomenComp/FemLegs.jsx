import React from 'react'
import FemLegs from "./WomenImg/legs"

function FemLegs() {
    return(
        <div>
             <NavLink exact to="/" active className="active">
              <img src={legs} className="legs-icon"/>
              </NavLink> 
        </div>
    )
}

export default FemLegs