import React from "react"
import { NavLink } from "react-router-dom"
import appCover from "../Images/appCover.jpg"




class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (

            <div className="container">

                <div className="cover">
                    <img src={appCover} className="cover" />
                    {/* <div className="button"> */}
                    <NavLink exact to="/Quote" active className="login">
                        Sign Up
                </NavLink>
                    {/* </div> */}
                </div>

            </div>
        )

    }


}

export default Home