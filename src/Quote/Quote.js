import React from "react"
import { NavLink } from "react-router-dom"


const Quote = () => {
    return (
        <div className="quote-page">

            <div className="quote">
                <h3>“It is a shame for a man to grow
                    old without seeing the beauty
                    and strength of which his body
                    is capable.” <br/> <br />
                                     “Socrates”</h3>

            </div>
            <footer>
            <NavLink exact to="/Gender" active className="next">
                Next
            </NavLink>
            </footer>
        </div>

    )
}

export default Quote