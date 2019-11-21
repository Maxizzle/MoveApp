import React from "react"
import axios from "axios"


class Nutrients extends React.Component{
    constructor(props) {
        super(props)
        this.state={
        nutrients:[],
        fruitValue:''
        }
    }

    componentDidMount(){
      
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

    fetchData = async() => {
        try {
            const nutrients = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=d7bc68ea&app_key=7f4c3a19a1fd1622c7a72f8c73861834&ingr=1%20large%20${this.state.fruitValue}`)  
            console.log(nutrients)   
            this.setState({
                nutrients: nutrients.data
            })    
            
            
        } catch (error) {
          console.log(error)  
        }
    }

    renderNutrition = () => {

    }

    render(){
        // console.log(this.state.nutrients)
        return(
            
            <div className="nutri">
                <form onSubmit={this.handleSubmit}>
                   <input type="text" value={this.state.value} onChange={this.handleEvent} placeholder="fruitname"/>
                   <input type="submit" value="submit" />
                </form>
          
            </div>
        )
    }
}

export default Nutrients