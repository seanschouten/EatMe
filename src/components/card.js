import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)
            
        this.state = {
                food: '',
                calories: 0,
                category: 'meal'
            }
    }


    render() {
        return(
            <div className='Card'>
                <p>Meals</p>

            </div>
        )
    }
} 