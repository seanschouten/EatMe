//This is PARENT

import React, { Component } from 'react'
import Axios from 'axios'
import AddFoodForm from './addFoodForm'
import FoodListForm from './foodListForm'
// import Meal from './meal'
// import Snack from './snack'
// import Total from './total'
import Card from './card'


export default class Eat extends Component {
    constructor (props){
        super(props)

        this.state = {
            food: []
        }
    }

    componentDidMount() {
        Axios.get('/api/foods').then ((res) => {
            this.setState({
                food: res.data
            })
        }).catch(err => console.log ('oopsies', err))
    }

    addFood = newFood => {
            Axios.post('/api/foods', newFood).then(res => {
                console.log(res.data)
                this.setState({
                    food: res.data
                })
            }).catch(err => console.log('Oy vey!', err))
        }

    render(){
        let filteredMeal = this.state.food.filter((item) => {return item.category == 'meal'})
        let filteredMealMap = filteredMeal.map((item) => 
            <div>
                <div>{item.food}</div>
                <div>{item.calories}</div>
            </div>
        )

        let filteredSnack = this.state.food.filter((item) => {return item.category == 'snack'})
        let filteredSnackMap = filteredSnack.map((item) => 
            <div>
                <div>{item.food}</div>
                <div>{item.calories}</div>
            </div>
        )

        return(
        <div>
            <h1>Eat Me</h1>
            <h2>Calorie Tracker</h2>
            <AddFoodForm addFood={this.addFood}/>
            <p>Meals: {filteredMealMap}</p>
            <p>Snacks: {filteredSnackMap}</p>
            {/* <FoodListForm food={this.state.food}/> */}
        </div>
        )
    }
}
