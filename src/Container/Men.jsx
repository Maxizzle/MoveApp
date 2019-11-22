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
import Nutrients from '../components/Nutrition/Nutrients'


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

            <div classname="men-headline">
                <Nutrients/>
                <h2> What are we working out today?</h2>
                {this.state.allWorkouts.map(workout => (
                    <div className="men-icons">

                        <div className="row-1">

                            <a href={workout[1].imageUrl} target="_blank"><img className="page-icons" src={fit} alt="" />Core</a>

                            <a href={workout[0].imageUrl} target="_blank"><img className="page-icons" src={gynecomastia} alt="" />Chest</a>
                        </div>

                        <div className="row-2">
                            <a href={workout[3].imageUrl} target="_blank"><img className="page-icons" src={back} alt="" />Back</a>

                            <a href={workout[4].imageUrl} target="_blank"><img className="page-icons" src={dumbbell} alt="" />Arms</a>
                        </div>


                        <div className="row-3">
                            <a href={workout[2].imageUrl} target="_blank"><img className="page-icons" src={muscles} alt="" />Legs</a>

                            <a href={workout[5].imageUrl} target="_blank"><img className="page-icons" src={sport} alt="" />Cardio</a>
                        </div>
                        
                        <div className="foot">
                        <NavLink exact to="/Gender" active className="back">
                            Back
                        </NavLink>
                            </div>
                        
                        </div> 
                ))}
            </div>
         
        )

    }
}





export default Men