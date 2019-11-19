import React from "react"
import Axios from "axios"

class Info extends React.Component {
    f
    constructor() {
        super()
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
        console.log(this.state)
        return (
            <div className="info">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
                    <input type="text" value={this.state.value} onChange={this.handleChange} name="age" />
                    <input type="text" value={this.state.value} onChange={this.handleChange} name="weight" />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }

}

export default Info