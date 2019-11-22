import React from 'react'
import {NavLink} from 'react-router-dom'
import legsFemme from '../../WomenImg/legsFemme.png'

function FemLegs() {
    return(
        <div>
             <NavLink exact to="/" active className="active">
              <img src={legsFemme} className="legs-icon"/>
              </NavLink> 
             
        </div>
    )
}

export default FemLegs