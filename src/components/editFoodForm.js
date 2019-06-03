import React, { Component } from 'react'

export default class EditFoodFod extends Component {
    constructor(props) {
        super(props)

        let { food, calories } = props.item

        this.state = {
            food,
            calories
        }
    }

    handleChange = e => {
    let { value, name } = e.target

    this.setState({
        [name]: value
    })
    }

    handleClick =() => {
        let updatedFood = {...this.props.item, ...this.state};
         console.log(updatedFood)
        this.props.updateFood(updatedFood)
    }


    render(){
        return(
            <div>
                <input 
                type = "text"
                name = "food"
                value = {this.state.food}
                placeholder = "Food"
                onChange={this.handleChange}/>

                <input 
                type = "number"
                name = "calories"
                value = {this.state.calories}
                placeholder = "Calories"
                onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Update</button>
            </div>
        )
    }
}