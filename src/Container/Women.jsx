import React from "react"
import { NavLink } from "react-router-dom"
import FemLegs from "../components/WomenComp/FemLegs"
import Abs from "../components/WomenComp/Abs"
import Joggings from "../components/WomenComp/Joggings"
import Power from "../components/WomenComp/Power"
import Top from "../components/WomenComp/Top"
import FreeWeights from "../components/WomenComp/Weights"
import { getWorkouts } from "../api"
import abs from '../WomenImg/abs.png'
import freeWeights from '../WomenImg/freeWeights.png'
import jogging from '../WomenImg/jogging.png'
import legsFemme from '../WomenImg/legsFemme.png'
import powerlift from '../WomenImg/powerLift.png'
import top from '../WomenImg/top.png'

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
                womenWorkouts:[...this.state.womenWorkouts, femWorkout.data]
            })
    }




    render() {
        return(
            <div className="women-header">
                <h2> What are we working out today?</h2> 
                {this.state.womenWorkouts.map(workout => (
                    <div className="women-icons">
                    
                    <div className="row-1">
                            <a href={workout[6].imageUrl} target="_blank"><img className="page-icons" src={abs} alt="" /></a>

                            <a href={workout[8].imageUrl} target="_blank"><img className="page-icons" src={top} alt="" /></a>
                        </div>

                        <div className="row-2">
                            <a href={workout[7].imageUrl} target="_blank"><img className="page-icons" src={legsFemme} alt="" /></a>

                            <a href={workout[9].imageUrl} target="_blank"><img className="page-icons" src={freeWeights} alt="" /></a>
                        </div>


                        <div className="row-3">
                            <a href={workout[10].imageUrl} target="_blank"><img className="page-icons" src={powerlift} alt="" /></a>

                            <a href={workout[11].imageUrl} target="_blank"><img className="page-icons" src={jogging} alt="" /></a>
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


export default Women