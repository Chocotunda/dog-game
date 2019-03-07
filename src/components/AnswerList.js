import React, { Component } from "react";
import Shuffle from './Shuffle'

export default class AnswerList extends Component {


  render() {
    console.log(this.props)
    const { dogBreeds } = this.props

    return (
      <ul>
        { dogBreeds.map(dog => {
          return <li onClick={() => this.props.checkAnswer(dog)} key={dog}>{dog}</li>
        })}
      </ul>
    )
  
  }
}
