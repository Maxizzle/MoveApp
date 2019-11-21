import React from "react"
import { NavLink, Switch, Route } from "react-router-dom"


const Quote = () => {
    return (
        <>

            <div className="quote">
                <h3>“It is a shame for a man to grow
                    old without seeing the beauty
                    and strength of which his body
                    is capable.” <br/> <br />
                                     “Socrates”</h3>

            </div>
            <NavLink exact to="/Gender" active className="next">
                Next
            </NavLink>
        </>

    )
}

export default Quote