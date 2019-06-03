import React, { Component } from 'react'
import EditFoodForm from './editFoodForm'
import '../card.css'

export default class Card extends Component {
    constructor(props){
        super(props)
        
        
        this.state = {
            food: '',
            calories: 0,
            category: 'meal',
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    
    
    render() {
        let { item } = this.props
        return(
        <div className ='card'>
            {this.state.edit ? 
                <EditFoodForm 
                item = {item}
                updateFood={this.props.updateFood}/>
                :
            <div>
                <div>{item.food}</div>
                <div>{item.calories}</div>
                {/* <button onClick={()=>this.props.updateFood(item.id)}>Update</button> */}
                <button onClick={()=>this.props.deleteFood(item.id)}>Delete</button>

            </div>
                
            } 

        {this.state.edit ?
          <button onClick={this.toggleEdit}>Save</button>
          :
          <button onClick={this.toggleEdit}>Edit</button>
        
        }

        </div>
            
        )
    }
} 