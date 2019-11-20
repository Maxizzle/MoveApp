import React from "react"
import { NavLink } from "react-router-dom"




class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <div className="signup">
                <div className="button">
                    <NavLink exact to="/Quote" active className="active">
                        Sign Up
                </NavLink>
                </div>

            </div>
        )

    }


}

export default Home