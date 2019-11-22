import React from "react"
import axios from "axios"
import { PrintNutrients } from './PrintNutrients'


class Nutrients extends React.Component{
    constructor(props) {
        super(props)
        this.state={
        nutrients:[],
        fruitValue:''
        }
    }


    handleEvent = (event) => {
        this.setState({
            fruitValue:event.target.value
        })
        
    }

    handleSubmit = (event) => {

        event.preventDefault();
        this.fetchData()
        event.target.reset()

    }

    handleNutrients = (nutrients) => {
        if(nutrients) {
            return(
                // PrintNutrients(this.state.nutrients)
                <div>     
                <h5>calories:{nutrients.calories}</h5>
                <h5>weight:{nutrients.totalWeight}</h5>
                <h5>{nutrients.diet}</h5>
                </div>
            )
        }

    }

    componentDidMount() {
        this.fetchData()
    }
    fetchData = async() => {
        try {
            const nutrients = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=d7bc68ea&app_key=7f4c3a19a1fd1622c7a72f8c73861834&ingr=1%20large%20${this.state.fruitValue}`)  
               
            this.setState({
                nutrients: nutrients.data
            })   
            console.log(this.state.nutrients) 
                 
        } catch (error) {
          console.log(error)  
        }
    }

    renderNutrition = () => {

    }

    render(){
        console.log(this.state.nutrients)
    
        return(
            
            <div className="nutri">
                
                    
                <form onSubmit={this.handleSubmit}>
                    <div className="fruit">
                   <input type="text" value={this.state.value} onChange={this.handleEvent} placeholder="Type Fruit"/>
                   <input type="submit" value="submit" />
                   </div>
                </form>
             <div className={"nutrients"}> {this.handleNutrients(this.state.nutrients)}</div>
            </div>
        )
    }
}

export default Nutrients