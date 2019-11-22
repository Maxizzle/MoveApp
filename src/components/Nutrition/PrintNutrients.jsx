import React from 'react'
import { NavLink } from "react-router-dom"

export const PrintNutrients = (nutrients) => {
    
    return(
        <div>
             <NavLink exact to="/Gender" active className="next">
            Next
        </NavLink>
        <h5>nutrients.calories</h5>
        <h5>nutrients.totalWeight</h5>
        <h5>nutrients.diet</h5>
        </div>

    )
}
