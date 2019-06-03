//This is PARENT

import React, { Component } from 'react'
import Axios from 'axios'
import AddFoodForm from './addFoodForm'
import Card from './card'
import '../eat.css'


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
                this.setState({
                    food: res.data
                })
            }).catch(err => console.log('Oy vey!', err))
        }

    deleteFood = id => {
        Axios.delete(`/api/foods/${id}`)
        .then(res => {this.setState({food: res.data})})
        .catch(err => console.log(`Don't kill meeee`))
    }

    updateFood = item => {
        console.log(item)
        Axios.put(`/api/foods/${item.id}`, item)
        .then(res => this.setState({food: res.data}))
        .catch(err => console.log(`Don't change meeee`))
    }


    render(){
        let filteredMeal = this.state.food.filter((item) => {return item.category == 'meal'})
        let filteredMealMap = filteredMeal.map((item) =>{
            return(
                <Card key={item.id}
                      item={item}
                      deleteFood={() => this.deleteFood(item.id)}
                      updateFood={this.updateFood}
                      />
            )

        } 
            
    
        )

        let filteredSnack = this.state.food.filter((item) => {return item.category == 'snack'})
        let filteredSnackMap = filteredSnack.map((item) =>{
            return (
                <Card key={item.id}
                      item={item}
                      deleteFood={() => this.deleteFood(item.id)}
                      updateFood={this.updateFood}/>
            )
        } 
        )

    

        return(
        <div className= "container">
            <h1>Eat Me</h1>
            <h2>Meal Tracker</h2>
            <AddFoodForm addFood={this.addFood}/>
            <p> Meals: </p>
            <div className='mealCard'>{filteredMealMap}</div>
            <p>Snacks: </p>
           <div className='snackCard'>{filteredSnackMap}</div>
        </div>
        )
    }
}
