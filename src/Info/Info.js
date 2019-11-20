import React from "react"
import Axios from "axios"
import sport from "../Images/sport.png"
import athlete from "../Images/athlete.png"
import {NavLink} from "react-router-dom"
import Men from "../Container/Men"


class Info extends React.Component {
    f
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            weight: "",
        }

    }

    handleChange = event => {
        // console.log('eventTargetName', event.target.name)
        // console.log('eventTargetValue', event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const info = await Axios.post("https://5dd1ad9715bbc2001448d388.mockapi.io/user", {
                name:this.state.name,
                age:this.state.age,
                weight: this.state.weight
                
            }).then((res)=>{
                console.log(res)
            })

        } catch (error) {
            console.log(error)
        }
    }

   


    render() {
        console.log(this.props)
        let icon = this.props.location.state.gender === 'male' ? <img src={sport} className="male-icon"/> : <img src={athlete} className="female-icon"/>

        // let femIcon = this.props.location.state.gender === 'female' ? <img src={athlete} className="female-icon"/> : null
        return (
           
            <div className="info">
                {icon}
             
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
                    <input type="text" value={this.state.value} onChange={this.handleChange} name="age" />
                    <input type="text" value={this.state.value} onChange={this.handleChange} name="weight" />
                    {/* <input type="submit" value="Next" /> */}  
                </form>
                <div className >
                      <NavLink exact to="/Men" active className="active">
                        Next
                </NavLink>
                </div>

            </div>
         
        )
    }

}

export default Info