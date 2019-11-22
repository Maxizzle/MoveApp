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
                    <div className="title">
                    <h1>Move</h1>
                    </div>
                    <img src={appCover} className="cover" />
                    <NavLink exact to="/Quote" active className="login">
                        Sign Up
                </NavLink>
                
                </div>

            </div>
        )

    }


}

export default Home