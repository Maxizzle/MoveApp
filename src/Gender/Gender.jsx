import React from 'react'
import sport from "../Images/sport.png"
import athlete from "../Images/athlete.png"
import { NavLink } from "react-router-dom"

function Gender() {
    return (
        <div className="gender-page">
            <div className="choose-icon">
                <h2 className="choose-gender">Choose Your Icon</h2>

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
            </div>
            <div>
                <footer>
                    <NavLink exact to="/Quote" active className="back-gender">
                        Back
                    </NavLink>
                </footer>
            </div>

        </div>






    )
}

export default Gender