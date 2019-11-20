import React from "react"
import { NavLink, Link } from "react-router-dom"
import Legs from "../components/Legs"
import Chest from "../components/Chest"
import Back from "../components/Back"
import Arms from "../components/Arms"
import Core from "../components/Core"
import Cardio from "../components/Cardio"
import { getWorkouts } from "../api"
import muscles from '../Images/muscles.png'
import gynecomastia from '../Images/gynecomastia.png'
import back from '../Images/back.png'
import dumbbell from "../Images/dumbbell (1).png"
import fit from '../Images/fit.png'
import sport from '../Images/sport.png'

class Men extends React.Component {
    constructor() {
        super()
        this.state = {
            allWorkouts: []
        }

    }
    async componentDidMount() {
        const workouts = await getWorkouts.catch(e => console.error(e))
        console.log(workouts)

        this.setState({
            allWorkouts: [...this.state.allWorkouts, workouts.data]

        })

    }

    render() {
        return (

            <div classname="Men-headline">
                <h2> What are we working out today?</h2>
                {this.state.allWorkouts.map(workout => (
                    <div className="men-icons">

                        <div className="row-1">
                            <a href={workout[0].imageUrl} target="_blank"><img className="page-icons" src={gynecomastia} alt="" /></a>

                            <a href={workout[1].imageUrl} target="_blank"><img className="page-icons" src={fit} alt="" /></a>
                        </div>

                        <div className="2">
                            <a href={workout[3].imageUrl} target="_blank"><img className="page-icons" src={back} alt="" /></a>

                            <a href={workout[4].imageUrl} target="_blank"><img className="page-icons" src={dumbbell} alt="" /></a>
                        </div>


                        <div className="row-3">
                            <a href={workout[2].imageUrl} target="_blank"><img className="page-icons" src={muscles} alt="" /></a>

                            <a href={workout[5].imageUrl} target="_blank"><img className="page-icons" src={sport} alt="" /></a>
                        </div>

                    </div>

                ))}
            </div>

        )

    }
}





export default Men