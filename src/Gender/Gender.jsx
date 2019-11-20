import React from 'react'
import sport from "../Images/sport.png"
import athlete from "../Images/athlete.png"
import { NavLink } from "react-router-dom"

function Gender() {
    return (
        <div>
            <h2 className="choose-gender">Choose your Gender</h2>
            <div className="icons">

                <NavLink className="active" to={{
                    pathname: '/Info',
                    state: {
                        gender: 'male'
                    }
                }}><img src={sport} className="male-icon" /></NavLink>


                <NavLink className="active" to={{
                    pathname: "/Info",
                    state: {
                        gender: 'female'
                    }
                }}><img src={athlete} className="female-icon" /></NavLink>

            </div>

            <div>

                <           footer>
                    <NavLink exact to="/Gender" active className="back">
                        Back
            </NavLink>
                </footer>
            </div>

        </div>






    )
}

export default Gender