import React from "react"
import { NavLink, Link } from "react-router-dom"
import FemLegs from "../components/WomenComp/FemLegs"
import Abs from "../components/WomenComp/Abs"
import Joggings from "../components/WomenComp/Joggings"
import Powerlift from "../components/WomenComp/Powerlift"
import Top from "../components/WomenComp/Top"
import FreeWeights from "../components/WomenComp/FreeWeights"
import { getWorkouts } from "../api"
import abs from '../WomenImg/abs'
import FreeWeights from '../WomenImg/FreeWeights'
import jogging from '../WomenImg/jogging'
import legsFemme from '../WomenImg/legsFemme'
import Powerlift from '../WomenImg/Powerlift'
import top from '../WomenImg/top'

class Women extends React.Component{
    constructor(){
        super()
        this.state={
         womenWorkouts:[]
        }
    }

    async componentDidMount(){
        const femWorkout = await getWorkouts.catch(e =>
            console.error(e))


            this.setState({
                womenWorkouts:[...this.state.womenWorkouts, workouts.data]
            })
    }




    render() {
        return(
            <div className="women-header">
                <h2> What are we working out today?</h2> 
                {this.state.womenWorkouts.map(workout => (
                    <div className="women-icons">
                    
                    <div className="Wom-row-1">
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


export default Women