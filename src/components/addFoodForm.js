import React, { Component } from 'react'

export default class AddFoodForm extends Component {
    constructor(props){
        super(props)


        this.state = {
            food: '',
            calories: 0,
            category: 'meal'
        }
    }

    handleChange = e => {
        let {name, value} = e.target

        this.setState ({
            [name]: value
        })
    }

    handleClick = () => {
       const {food, calories, category } = this.state
       let newFood = {
        calories,
        food,
        category
    }
       this.props.addFood(newFood)

    }

    // handleMealClick = () => {
    //     this.setState({})
    // }



    render(){
        return(
            <div className='User Input'>
              <label>Food:
                <input
                    type="text"
                    name="food"
                    onChange={this.handleChange}
                    />
              </label>
              <label>Calories:  
                <input
                    type="number"
                    name="calories"
                    onChange={this.handleChange}
                    />
              </label>      
                <select name="category" onChange={this.handleChange} value={this.state.value}>
                    <option  value="meal">Meal</option>
                    <option value="snack">Snack</option>
                </select>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}